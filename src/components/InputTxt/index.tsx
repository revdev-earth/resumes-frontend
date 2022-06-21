import { InputTxtContainer } from "./styles"
import { useState, useEffect } from "react"
import Image from "next/image"

export type InputProps = {
  type?: "text" | "textarea" | "date" | "number"
  txt?: string
  title?: boolean
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
          <Image
            src="/assets/check-solid.svg"
            alt="check"
            onClick={editorChange}
            width={500}
            height={500}
          />
        </div>
      ) : (
        <p>
          {texto}
          <Image
            src="/assets/pen-to-square-solid.svg"
            alt="edit"
            onClick={editorChange}
          />
        </p>
      )}
    </InputTxtContainer>
  )
}

export default InputTxt
