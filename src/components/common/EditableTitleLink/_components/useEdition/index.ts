import { useRef, useState, useEffect } from "react"

import { useSelector } from "@redux"

export const useEdition = (incomingValue) => {
  const refElement = useRef(null)

  const { role } = useSelector((s) => s.app.auth)

  const [sizes, setSizes] = useState({ offsetHeight: 0, offsetWidth: 0 })
  const [availableToEdit, setStateEdition] = useState(false)
  const [value, setValue] = useState(incomingValue)

  // overplaid

  const readSizes = () => {
    if (refElement.current) {
      const offsetHeight = refElement.current.offsetHeight
      const offsetWidth = refElement.current.offsetWidth
      setSizes({ offsetHeight, offsetWidth })
      console.log({ offsetHeight, offsetWidth })
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
