//field

import { checkPublicIcon } from "@utils"
import Image from "next/image"
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
  const {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    link,
    handleWriting,
    sizes,
    refElement,
  } = useEdition({ link: link_icoming, name })

  return (
    <>
      {availableToEdit ? (
        <>
          <textarea
            className={`
            bg-transparent h-[30px] pl-2
            border-solid rounded-md border-[1px] border-[#6BDFDC]
            ${stylesText}
          `}
            style={{
              width: sizes.offsetWidth,
              resize: "none",
            }}
            onChange={handleWriting}
            onDoubleClick={handleClickSave}
            name="icon"
            value={link.icon}
          />
          <textarea
            className={`
            bg-transparent h-[30px] pl-2
            border-solid rounded-md border-[1px] border-[#6BDFDC]
            ${stylesText}
          `}
            style={{
              width: sizes.offsetWidth,
              resize: "none",
            }}
            onChange={handleWriting}
            onDoubleClick={handleClickSave}
            name="path"
            value={link.path}
          />

          <textarea
            className={`
            bg-transparent h-[30px] pl-2
            border-solid rounded-md border-[1px] border-[#6BDFDC]
            ${stylesText}
          `}
            style={{
              width: sizes.offsetWidth,
              resize: "none",
            }}
            onChange={handleWriting}
            onDoubleClick={handleClickSave}
            name="name"
            value={link.name}
          />
        </>
      ) : (
        <div
          className={`
            border-solid rounded-md border-1 
            border-transparent p-[1px] mb-[6px]
        ${stylesText}
      `}
          ref={refElement}
          onDoubleClick={handleClickActiveEdition}
        >
          {/* <a className="font-bold" href={path}> */}
          <div className="font-bold flex gap-1">
            <Image
              src={checkPublicIcon(link.icon)}
              alt="icon link project"
              width={16}
              height={16}
            />
            {link.name}
          </div>
          {/* </a> */}
        </div>
      )}
    </>
  )
}
