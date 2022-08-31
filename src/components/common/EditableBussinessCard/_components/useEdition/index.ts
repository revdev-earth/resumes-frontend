import { useRef, useState, useEffect } from "react"

import { useSelector } from "@redux"

import {
  usePutBussinessCardMutation,
  useGetBussinessCardQuery,
} from "@redux/api/endpoints/businnes_card"

export const useUpdateBussinessCard = () => {
  const [put_bussines_card] = usePutBussinessCardMutation()
  // tendremos que tener ya disponible la funcion del state ich meins ya tiene que tener
  // lo que seria el documento de resumen,
  // veamos eso, como obtener el resumen
  const { data: businnes_card } = useGetBussinessCardQuery({})

  const update_resume_with = <Object>(incoming_object: Object) => {
    // objects incoming
    const key = Object.keys(incoming_object)[0]
    const value = incoming_object[key]

    const bussiness_card_to_update = {
      ...businnes_card,
      ...{ [key]: value },
    }

    // send new bussines_card
    put_bussines_card(bussiness_card_to_update)
  }

  return {
    update_resume_with,
  }
}

export const useEdition = (incomingValue, name: string) => {
  const { update_resume_with } = useUpdateBussinessCard()

  const { role } = useSelector((s) => s.app.auth)

  const refElement = useRef(null)

  const [sizes, setSizes] = useState({ offsetHeight: 0, offsetWidth: 0 })
  const [availableToEdit, setStateEdition] = useState(false)
  const [value, setValue] = useState(incomingValue)

  // overplaid

  const read_sizes = () => {
    if (refElement.current) {
      const offsetHeight = refElement.current.offsetHeight
      const offsetWidth = refElement.current.offsetWidth
      setSizes({ offsetHeight, offsetWidth })
    }
  }

  // Handlers

  const handleWriting = (e) => setValue(e.target.value)

  const handleClickActiveEdition = () =>
    role === "writer" && setStateEdition(true)

  const handleClickSave = () => {
    update_resume_with({ [name]: value })

    setStateEdition(false)

    setTimeout(() => {
      read_sizes()
    }, 100)
  }

  // Effects

  useEffect(() => {
    read_sizes()
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
