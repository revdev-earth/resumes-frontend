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
    <div className="flex items-center gap-0 mt-15px pl-1  cursor-pointer ">
      <LinkImage className="h-6" alt={link} layout="fill" />
      <Editable
        className="mt-0"
        bold
        type="text"
        name="link"
        txt={editable}
        control={control}
        onChange={HandleInputChange}
      />
    </div>
  )
}

export default LinkTitle
