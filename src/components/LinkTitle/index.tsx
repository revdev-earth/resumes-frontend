import { LinkTitleContainer } from "./styles"
import { Editable } from "@components"
import { useEffect, useState } from "react"
import LinkImage from "@public/assets/link.svg"
import { useForm } from "react-hook-form"

const LinkTitle = ({ title, link }) => {
  const [editable, setEditable] = useState("")
  const { control } = useForm({
    defaultValues: {
      title: title,
      link: link,
    },
  })

  useEffect(() => {
    setEditable(title)
  }, [title])

  const HandleInputChange = (event) => {
    setEditable(event.target.value)
  }

  return (
    <LinkTitleContainer>
      <LinkImage alt={link} layout="fill" />
      <Editable
        bold
        type="text"
        name="link"
        txt={editable}
        control={control}
        onChange={HandleInputChange}
      />
    </LinkTitleContainer>
  )
}

export default LinkTitle
