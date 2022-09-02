import Image from "next/image"

import { useSelector } from "@redux"

import { checkPublicIcon } from "@utils"

import { Social_item } from "tree"

import { useEdition } from "./_components"

import { EditableIsolationAndActionsMouseTouch } from "../EditableIsolationAndActionsMouseTouch"

import { Loader } from "@components/common/Loader"

interface EditableProps {
  name: string
  stylesText?: string
  social: Social_item
}

export const EditableSocial = ({
  name,
  stylesText,
  social: social_icoming,
}: EditableProps) => {
  //

  const { role } = useSelector((s) => s.app.auth)

  const {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    social,
    handleWriting,
    sizes,
    refElement,
  } = useEdition({ social: social_icoming, name })

  // Text area

  const text_area_style = `
    bg-transparent h-[30px] pl-2 border-[1px]
    border-solid rounded-md border-[#6BDFDC]
    ${stylesText}
  `

  const text_area_props = (name: "icon" | "path" | "name") => ({
    onChange: handleWriting,
    onDoubleClick: handleClickSave,
    name,
    value: social[name],
    className: text_area_style,
    style: {
      width: sizes.offsetWidth,
    },
  })

  // Div

  const content_reader = (
    <div
      className={`font-bold flex gap-1 ${
        role === "reader" && "cursor-pointer"
      }`}
    >
      <Image
        src={checkPublicIcon(social.icon)}
        alt="icon social media"
        width={16}
        height={16}
        className={`${role === "reader" && "cursor-pointer"}`}
      />
      {social.name}
    </div>
  )

  const los_text_areas = (
    <>
      <textarea {...text_area_props("icon")} />
      <textarea {...text_area_props("path")} />
      <textarea {...text_area_props("name")} />
    </>
  )

  const components = () => {
    if (role === "writer") return content_reader

    if (role === "reader") {
      return (
        <a className="font-bold" href={social.path}>
          {content_reader}
        </a>
      )
    }

    return <Loader />
  }

  const return_nuevo = (
    <EditableIsolationAndActionsMouseTouch
      {...{
        availableToEdit,
        divs: components(),
        text_areas: los_text_areas,
        handleClickActiveEdition,
        handleClickSave,
        stylesText,
        refElement,
      }}
    />
  )

  return return_nuevo
}
