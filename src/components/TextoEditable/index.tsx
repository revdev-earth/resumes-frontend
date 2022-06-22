import { useState, useEffect, useRef } from "react"
import { Content, EditarTxt } from "./styles"
import Edit from "@public/assets/pen-to-square-solid.svg"
import Check from "@public/assets/check-solid.svg"

const TextoEditable = ({ txt }) => {
  const [editar, setEditar] = useState(false)
  const [texto, setTexto] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae corporis excepturi quaerat ex aliquid, dicta ullam. Ab adipisci minus error inventore quam cumque ipsa excepturi pariatur."
  )

  useEffect(() => {
    setTexto(txt)
  }, [txt])

  const textoRef = useRef()
  const heightTxt = textoRef?.current?.clientHeight

  const handleInputChange = (event) => {
    setTexto(event.target.value)
  }

  const editorChange = () => {
    setEditar(!editar)
  }

  return (
    <Content>
      {editar ? (
        <EditarTxt heightTxt={heightTxt}>
          <Check alt="check" onClick={editorChange} />
          <textarea value={texto} onChange={handleInputChange} />
        </EditarTxt>
      ) : (
        <p>
          {texto}
          <Edit alt="edit" onClick={editorChange} />
        </p>
      )}
    </Content>
  )
}

export default TextoEditable
