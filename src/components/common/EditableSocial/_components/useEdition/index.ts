import { useRef, useState, useEffect } from "react"

import {
  useGetResumeWithJwtQuery,
  usePutResumeMutation,
} from "@redux/api/endpoints/resume"

import { Social_item } from "tree"
import { useSelector } from "@redux"

export const useUpdateText = () => {
  const [putResume] = usePutResumeMutation()
  // tendremos que tener ya disponible la funcion del state ich meins ya tiene que tener
  // lo que seria el documento de resumen,
  // veamos eso, como obtener el resumen
  const { data: resume_incoming } = useGetResumeWithJwtQuery({})
  // resume
  const resume_json = JSON.parse(resume_incoming.content)

  const object_modified = <Object>(
    resume: Object,
    keys: string[],
    value: string
  ) => {
    const category = keys[0] // social
    const position_element = keys[1] // 0

    // social.0.icon
    if (category === "social") {
      return {
        [category]: [
          ...resume[category].map((category_item, index_category) => {
            if (index_category !== Number(position_element))
              return category_item

            return value
          }),
        ],
      }
    }
  }

  const updateText = <Object>(incoming_object: Object) => {
    // objects incoming
    const key = Object.keys(incoming_object)[0]
    const value = incoming_object[key]

    // split key incomming
    const key_splited = key.split(".")

    console.log("\n\n\nnew_object: \n\n", {
      ...resume_json,
      ...object_modified(resume_json, key_splited, value),
    })

    // mutation method put resume
    putResume(
      // resume table just with content
      {
        content: JSON.stringify(
          // new object
          {
            ...resume_json,
            ...object_modified(resume_json, key_splited, value),
          }
        ),
      }
    )
  }

  return {
    updateText,
  }
}

// eslint-disable-next-line no-unused-vars
export const useEdition = ({ social: social_incoming, name }: any) => {
  const { updateText } = useUpdateText()

  const { role } = useSelector((s) => s.app.auth)

  const refElement = useRef(null)

  const [sizes, setSizes] = useState({ offsetHeight: 0, offsetWidth: 0 })
  const [availableToEdit, setStateEdition] = useState(false)
  const [social, setSocial] = useState<Social_item>(social_incoming)

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
    setSocial((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleClickActiveEdition = () => {
    if (role === "writer") {
      setStateEdition(true)
      console.log(":: andleClickActiveEdition")
    }
  }

  const handleClickSave = () => {
    updateText({ [name]: social })

    setSocial((s) => ({
      ...s,
      icon:
        name.split(".")[3] === "icon" &&
        name.split(".")[3].indexOf("https") !== -1
          ? social.icon
          : "/assets/social.svg",
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
    social,
    handleWriting,
    sizes,
    refElement,
  }
}
