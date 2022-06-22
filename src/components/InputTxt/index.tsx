import { InputTxtContainer } from "./styles"
import { useState, useEffect } from "react"
import Edit from "@public/assets/pen-to-square-solid.svg"
import Check from "@public/assets/check-solid.svg"

export type InputProps = {
  type?: "text" | "textarea" | "date" | "number"
  txt?: string
  titleBold?: boolean
  text?: boolean
  date?: boolean
  value?: string
  number?: number
}

const InputTxt = ({ type = "text", txt, ...arg }) => {
  const [editar, setEditar] = useState(false)
  const [texto, setTexto] = useState("")

  useEffect(() => {
    setTexto(txt)
  }, [txt])

  const handleInputChange = (event) => {
    setTexto(event.target.value)
  }

  const editorChange = () => {
    setEditar(!editar)
  }

  return (
    <InputTxtContainer {...arg}>
      {editar ? (
        <div>
          <input
            type={type}
            value={texto}
            {...arg}
            onChange={handleInputChange}
          />
          <Check alt="check" onClick={editorChange} />
        </div>
      ) : (
        <p>
          {texto}
          <Edit alt="edit" onClick={editorChange} />
        </p>
      )}
    </InputTxtContainer>
  )
}

export default InputTxt
