import { useState, useEffect } from "react"
import { Content, EditarTxt } from "./styles"
import Image from "next/image"

const TextoEditable = ({ txt }) => {
  const [editar, setEditar] = useState(false)
  const [texto, setTexto] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae corporis excepturi quaerat ex aliquid, dicta ullam. Ab adipisci minus error inventore quam cumque ipsa excepturi pariatur."
  )

  useEffect(() => {
    setTexto(txt)
  }, [txt])

  // const textoRef = useRef()
  // const heightTxt = textoRef?.current?.clientHeight

  const handleInputChange = (event) => {
    setTexto(event.target.value)
  }

  const editorChange = () => {
    setEditar(!editar)
  }

  return (
    <Content>
      {editar ? (
        <EditarTxt>
          <Image
            src="/assets/check-solid.svg"
            alt="check"
            onClick={editorChange}
          />
          <textarea value={texto} onChange={handleInputChange} />
        </EditarTxt>
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
    </Content>
  )
}

export default TextoEditable
