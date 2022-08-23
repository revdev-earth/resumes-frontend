import { useGetUserQuery } from "@redux/api/endpoints/user"
import { useRef, useState, useEffect } from "react"

// export const function_etwas_so = (name, tree) => {}

export const useCambio_de_texto = () => {
  // tendremos que tener ya disponible la funcion del state ich meins ya tiene que tener
  // lo que seria el documento de resumen,
  // veamos eso, como obtener el resumen
  const { data: user } = useGetUserQuery({})

  const updateText = (tree) => {
    console.table(tree)

    const { resume } = user

    const resume_json = JSON.parse(resume.content)
    console.table(resume_json)

    var match = /./.exec(Object.keys(tree)[0])

    if (match) {
      console.log("split")
      // const splited = Object.keys(tree)[0].split(".")
      // console.table(
      //   "experiences: ",
      //   splited[0],
      //   resume_json[splited[0]][splited[1]][splited[2]]
      // )

      const make_that_string = Object.keys(tree)[0]
        .split(".")
        .reduce((previousValue, currentValue, currentIndex, array) => {
          console.log(previousValue, currentValue, currentIndex, array, "\n\n")
          return ""
        })

      // .map((valor) => {
      //   if (String(Number(valor)) !== "NaN") {
      //     return `[${valor}]`
      //   }
      //   return valor
      // })

      console.log("make_that_string \n \n", make_that_string)
    }

    // const new_resume_json = {
    //   ...resume_json,
    //   [Object.keys(tree)[0]]: tree[Object.keys(tree)[0]],
    // }

    // console.table(new_resume_json)

    // update resume with new content
  }

  return {
    updateText,
  }
}

export const useEdition = (incomingValue, name: string) => {
  const { updateText } = useCambio_de_texto()

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
    setStateEdition(true)
    console.log(":: andleClickActiveEdition")
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
