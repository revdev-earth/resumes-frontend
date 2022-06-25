import { Editable as EditableStyled } from "./styles"
import { useState } from "react"
import Edit from "@public/assets/pen-to-square-solid.svg"
import Check from "@public/assets/check-solid.svg"

//field
import { useController } from "react-hook-form"

export type InputProps = {
  type?: "text" | "textarea" | "date" | "number"
  txt?: string
  titleBold?: boolean
  text?: boolean
  date?: boolean
  value?: string
  number?: number
  name?: string
  control?: any
}

export const Editable = ({ type = "text", name, control, ...arg }) => {
  const [editar, setEditar] = useState(false)
  const { field } = useController({ name, control })

  const handleEdit = () => {
    setEditar(!editar)
  }

  const handleCheck = () => {
    setEditar(!editar)
  }

  return (
    <EditableStyled {...arg}>
      {editar ? (
        <div>
          <input type={type} {...field} />

          <Check alt="check" onClick={handleCheck} />
        </div>
      ) : (
        <p>
          {field.value}
          <Edit alt="edit" onClick={handleEdit} />
        </p>
      )}
    </EditableStyled>
  )
}
