import { LinkTitleContainer } from "./styles"
import InputTxt from "../InputTxt"
import { useEffect, useState } from "react"
import Image from "next/image"

const LinkTitle = ({ title }) => {
  const [editable, setEditable] = useState("")

  useEffect(() => {
    setEditable(title)
  }, [title])

  const HandleInputChange = (event) => {
    setEditable(event.target.value)
  }
  return (
    <LinkTitleContainer>
      <Image src="/assets/link.svg" alt="" layout="fill" />
      <InputTxt type="text" text txt={title} onChange={HandleInputChange} />
      <p>{editable}</p>
    </LinkTitleContainer>
  )
}

export default LinkTitle
