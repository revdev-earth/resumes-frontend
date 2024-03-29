import Image from "next/image"

import { useSelector } from "@redux"

import { checkPublicIcon } from "@utils"

import { useEdition } from "./_components"
import { EditableDeciderCommonAbstraction } from "../EditableDeciderCommonAbstraction"
import { Loader } from "@components/common/Loader"

interface EditableProps {
  name: string
  stylesText?: string
  link: {
    path: string
    icon: string
    name: string
  }
}

export const EditableProjectsLink = ({
  name,
  stylesText,
  link: link_icoming,
}: EditableProps) => {
  //

  const { role } = useSelector((s) => s.app.auth)

  const {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    link,
    handleWriting,
    sizes,
    refElement,
  } = useEdition({ link: link_icoming, name })

  // Text area

  const text_area_style = `
    bg-transparent h-[30px] pl-2 border-[1px]
    border-solid rounded-md border-[#6BDFDC]
    ${stylesText}
  `

  const text_area_props = (name: "icon" | "path" | "name") => ({
    name,
    value: link[name],
    className: text_area_style,
    onChange: handleWriting,
    style: {
      width: sizes.offsetWidth,
    },
  })

  // los_text_areas

  const los_text_areas = (
    <>
      <textarea {...text_area_props("icon")} />
      <textarea {...text_area_props("path")} />
      <textarea {...text_area_props("name")} />
    </>
  )

  // components

  const content_reader = (
    <div
      className={`font-bold flex gap-1 ${
        role === "reader" && "cursor-pointer"
      }`}
    >
      <Image
        src={checkPublicIcon(link.icon)}
        alt="icon link project"
        width={16}
        height={16}
        className={`${role === "reader" && "cursor-pointer"}`}
      />
      {link.name}
    </div>
  )

  const components = () => {
    if (role === "writer") return content_reader

    if (role === "reader") {
      return (
        <a className="font-bold" href={link.path}>
          {content_reader}
        </a>
      )
    }

    return <Loader />
  }

  return (
    <EditableDeciderCommonAbstraction
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
}
