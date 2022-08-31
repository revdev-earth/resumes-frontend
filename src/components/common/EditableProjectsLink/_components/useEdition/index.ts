import { useSelector } from "@redux"
import {
  useGetResumeWithJwtQuery,
  usePutResumeMutation,
} from "@redux/api/endpoints/resume"
import { useRef, useState, useEffect } from "react"

export const useCambio_de_texto = () => {
  const [putResume] = usePutResumeMutation()
  // tendremos que tener ya disponible la funcion del state ich meins ya tiene que tener
  // lo que seria el documento de resumen,
  // veamos eso, como obtener el resumen
  const { data: resume_incoming } = useGetResumeWithJwtQuery({})
  // resume
  const resume_json = JSON.parse(resume_incoming.content)

  const just_the_object_return = (keys: string[], link: any) => {
    const category = keys[0]
    const position_element = keys[1]
    const atribute = keys[2]

    // projects.0.link.path
    if (atribute === "link") {
      const new_object_with_link_edition = {
        [category]: [
          ...resume_json[category].map((category_item, index_category) => {
            if (index_category !== Number(position_element))
              return category_item

            return {
              ...resume_json[category][position_element],
              [atribute]: {
                ...link,
                icon:
                  keys[3] === "icon" && keys[3].indexOf("https") !== -1
                    ? link.icon
                    : "/assets/link.svg",
              },
            }
          }),
        ],
      }

      return new_object_with_link_edition
    }
  }

  const updateText = <Object>(incoming_object: Object) => {
    // objects incoming
    const key = Object.keys(incoming_object)[0]
    const value = incoming_object[key]

    // split key incomming
    const key_splited = key.split(".")

    const resume_to_update = {
      ...resume_json,
      ...just_the_object_return(key_splited, value),
    }

    // send new content
    putResume({
      content: JSON.stringify(resume_to_update),
    })
  }

  return {
    updateText,
  }
}

// eslint-disable-next-line no-unused-vars
export const useEdition = ({ link: link_incoming, name }: any) => {
  const { updateText } = useCambio_de_texto()

  const { role } = useSelector((s) => s.app.auth)

  const refElement = useRef(null)

  const [sizes, setSizes] = useState({ offsetHeight: 0, offsetWidth: 0 })
  const [availableToEdit, setStateEdition] = useState(false)
  const [link, setLink] = useState<{
    path: string
    icon: string
    name: string
  }>(link_incoming)

  // overplaid

  const readSizes = () => {
    if (refElement.current) {
      const offsetHeight = refElement.current.offsetHeight
      const offsetWidth = refElement.current.offsetWidth
      setSizes({ offsetHeight, offsetWidth })
    }
  }

  // Handlers

  const handleWriting = (e) => {
    setLink((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleClickActiveEdition = () => {
    if (role === "writer") {
      setStateEdition(true)
    }
  }

  const handleClickSave = () => {
    updateText({ [name]: link })

    setLink((s) => ({
      ...s,
      icon:
        name.split(".")[3] === "icon" &&
        name.split(".")[3].indexOf("https") !== -1
          ? link.icon
          : "/assets/link.svg",
    }))

    setStateEdition(false)
    setTimeout(() => {
      readSizes()
    }, 100)
  }

  // Effects

  // // check the size H2
  useEffect(() => {
    // when h2 is loaded, witch size have
    readSizes()
  }, [refElement])

  return {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    link,
    handleWriting,
    sizes,
    refElement,
  }
}
