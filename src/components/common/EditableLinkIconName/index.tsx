//field

import { useEdition } from "./_components"

interface EditableProps {
  name: string
  value: string
  stylesText?: string
  link: {
    path: string
    icon: string
    name: string
  }
}

export const EditableLinkIconName = ({
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
            bg-transparent
            border-solid rounded-md border-[1px] border-[#6BDFDC]
            ${stylesText}
          `}
            style={{
              width: sizes.offsetWidth,
              height: sizes.offsetHeight,
              resize: "none",
            }}
            onChange={handleWriting}
            onDoubleClick={handleClickSave}
            name="path"
            value={link.path}
          />
          <textarea
            className={`
            bg-transparent
            border-solid rounded-md border-[1px] border-[#6BDFDC]
            ${stylesText}
          `}
            style={{
              width: sizes.offsetWidth,
              height: sizes.offsetHeight,
              resize: "none",
            }}
            onChange={handleWriting}
            onDoubleClick={handleClickSave}
            name="icon"
            value={link.icon}
          />

          <textarea
            className={`
            bg-transparent
            border-solid rounded-md border-[1px] border-[#6BDFDC]
            ${stylesText}
          `}
            style={{
              width: sizes.offsetWidth,
              height: sizes.offsetHeight,
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
          <div className="font-bold">
            {link.path}
            <div>{link.icon}</div> <div>{link.name}</div>
          </div>
          {/* </a> */}
        </div>
      )}
    </>
  )
}
