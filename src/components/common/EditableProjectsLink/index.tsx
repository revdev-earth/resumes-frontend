import Image from "next/image"

import { useSelector } from "@redux"

import { checkPublicIcon } from "@utils"

import { useEdition } from "./_components"

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
    onChange: handleWriting,
    onDoubleClick: handleClickSave,
    name,
    value: link[name],
    className: text_area_style,
    style: {
      width: sizes.offsetWidth,
    },
  })

  // Div

  const div_style = `
    border-solid rounded-md border-1 
    border-transparent p-[1px] mb-[6px]
    ${stylesText}
  `

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

  return (
    <>
      {availableToEdit ? (
        <>
          <textarea {...text_area_props("icon")} />
          <textarea {...text_area_props("path")} />
          <textarea {...text_area_props("name")} />
        </>
      ) : (
        <div
          className={div_style}
          ref={refElement}
          onDoubleClick={handleClickActiveEdition}
        >
          {role === "writer" && content_reader}

          {role === "reader" && (
            <a className="font-bold" href={link.path}>
              {content_reader}
            </a>
          )}
        </div>
      )}
    </>
  )
}
