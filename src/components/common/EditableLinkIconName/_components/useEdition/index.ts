useGetUserQuery
import { usePutResumeMutation } from "@redux/api/endpoints/resume"
import { useGetUserQuery } from "@redux/api/endpoints/user"
import { useRef, useState, useEffect } from "react"

export const useCambio_de_texto = () => {
  const [putResume] = usePutResumeMutation()
  // tendremos que tener ya disponible la funcion del state ich meins ya tiene que tener
  // lo que seria el documento de resumen,
  // veamos eso, como obtener el resumen
  const { data: user } = useGetUserQuery({})

  const just_the_object_return = <Object>(
    resume: Object,
    keys: string[],
    link: any
  ) => {
    const category = keys[0]
    const position_element = keys[1]
    const atribute = keys[2]

    // projects.0.link.path
    if (atribute === "link") {
      const new_object_with_link_edition = {
        [category]: [
          ...resume[category].map((category_item, index_category) => {
            if (index_category !== Number(position_element))
              return category_item

            return {
              ...resume[category][position_element],
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

    // resume
    const resume_json = JSON.parse(user.resume.content)

    // split key incomming
    const key_splited = key.split(".")

    // console.log("key_splited : ", key_splited, "\ntype:", typeof key_splited)

    // create a draft empty resume
    let resume_draft = {}

    // when key splited just have one
    // will set resume draft whit
    // incoming_object[key]
    // there is just one actually
    // it is about
    if (key_splited.length === 1) resume_draft[key] = incoming_object[key]

    // more than 1
    // neet anidation secure
    if (key_splited.length > 1) {
      resume_draft = just_the_object_return(resume_json, key_splited, value)
    }

    console.log("\n\n resume_draft: \n", resume_draft, "\n\n")

    const resume_to_update = { ...resume_json, ...resume_draft }

    console.log("\n\nresume_to_update: \n", resume_to_update, "\n\n")

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
    setStateEdition(true)
    console.log(":: andleClickActiveEdition")
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
    console.log(":: handleClickSave")
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
