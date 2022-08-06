import { useState, useEffect, useRef } from "react"
import { Content, EditarTxt } from "./styles"
import Edit from "@public/assets/pen-to-square-solid.svg"
import Check from "@public/assets/check-solid.svg"
import { useController } from "react-hook-form"

const TextoEditable = (props) => {
  const { field } = useController(props)
  const [editar, setEditar] = useState(false)
  const textoRef = useRef<HTMLDivElement>()
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(textoRef?.current?.clientHeight)
  }, [textoRef])

  const editorChange = () => {
    setEditar(!editar)
  }

  return (
    <Content>
      {editar ? (
        <EditarTxt heightTxt={height}>
          <Check alt="check" onClick={editorChange} />
          <textarea {...field} />
        </EditarTxt>
      ) : (
        <p ref={textoRef}>
          {field.value}
          <Edit alt="edit" onClick={editorChange} />
        </p>
      )}
    </Content>
  )
}

export default TextoEditable
