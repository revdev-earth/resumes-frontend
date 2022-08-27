//field

import { checkPublicIcon } from "@utils"
import Image from "next/image"
import { Social_item } from "tree"
import { useEdition } from "./_components"

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
  const {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    social,
    handleWriting,
    sizes,
    refElement,
  } = useEdition({ social: social_icoming, name })

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
            value={social.icon}
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
            value={social.path}
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
            value={social.name}
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
              src={checkPublicIcon(social.icon)}
              alt=""
              width={16}
              height={16}
            />
            {social.name}
          </div>
          {/* </a> */}
        </div>
      )}
    </>
  )
}
