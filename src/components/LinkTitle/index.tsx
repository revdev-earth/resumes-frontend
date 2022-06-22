import { LinkTitleContainer } from "./styles"
import InputTxt from "../InputTxt"
import { useEffect, useState } from "react"
import LinkImage from "@public/assets/link.svg"

const LinkTitle = ({ children }) => {
  const [editable, setEditable] = useState("")

  useEffect(() => {
    setEditable(children)
  }, [children])

  const HandleInputChange = (event) => {
    setEditable(event.target.value)
  }

  return (
    <LinkTitleContainer>
      <LinkImage alt="" layout="fill" />
      <InputTxt
        bold
        type="text"
        text
        txt={editable}
        onChange={HandleInputChange}
      />
    </LinkTitleContainer>
  )
}

export default LinkTitle
