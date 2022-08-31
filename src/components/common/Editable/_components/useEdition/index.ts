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
  const { data: resume } = useGetResumeWithJwtQuery({})

  const just_the_object_return = <Object>(
    resume: Object,
    keys: string[],
    value: string
  ) => {
    const category = keys[0]
    const position_element = keys[1]
    const atribute = keys[2]
    const option = keys[3]

    // experiences.0.tecnologies.[sumary | ...]
    if (keys.length === 3) {
      const object_with_three_keys = {
        [category]: [
          ...resume[category].map((category_item, index_category) => {
            if (index_category !== Number(position_element))
              return category_item

            return {
              ...resume[category][position_element],
              [atribute]: value,
            }
          }),
        ],
      }

      return object_with_three_keys
    }

    // experiences.0.tecnologies.date
    if (atribute === "date") {
      const new_object_with_atribute = {
        [category]: [
          ...resume[category].map((category_item, index_category) => {
            if (index_category !== Number(position_element))
              return category_item

            return {
              ...resume[category][position_element],
              [atribute]: {
                ...resume[category][position_element][atribute],
                [option]: value,
              },
            }
          }),
        ],
      }

      return new_object_with_atribute
    }

    // experiences.0.tecnologies.tecnologies
    if (atribute === "tecnologies") {
      const new_object_with_tecnologies = {
        [category]: [
          ...resume[category].map((category_item, index_category) => {
            if (index_category !== Number(position_element))
              return category_item

            return {
              ...resume[category][position_element],
              [atribute]: [
                ...resume[category][position_element][atribute].map(
                  (tecnology, index_tecnology) =>
                    index_tecnology === Number(option) ? value : tecnology
                ),
              ],
            }
          }),
        ],
      }

      return new_object_with_tecnologies
    }
  }

  const updateText = <Object>(incoming_object: Object) => {
    // objects incoming
    const key = Object.keys(incoming_object)[0]
    const value = incoming_object[key]

    // resume
    const resume_json = JSON.parse(resume.content)

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

    console.log("\n\nobjecto_to_updated: \n", resume_draft, "\n\n")

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

export const useEdition = (incomingValue, name: string) => {
  const { updateText } = useCambio_de_texto()

  const { role } = useSelector((s) => s.app.auth)

  const refElement = useRef(null)

  const [sizes, setSizes] = useState({ offsetHeight: 0, offsetWidth: 0 })
  const [availableToEdit, setStateEdition] = useState(false)
  const [value, setValue] = useState(incomingValue)

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
    setValue(e.target.value)
  }

  const handleClickActiveEdition = () => {
    if (role === "writer") {
      setStateEdition(true)
      console.log(":: andleClickActiveEdition")
    }
  }

  const handleClickSave = () => {
    updateText({ [name]: value })
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
    value,
    handleWriting,
    sizes,
    refElement,
  }
}
