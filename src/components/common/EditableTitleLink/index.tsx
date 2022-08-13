//field
import { useEdition } from "./_components"

interface Editable2Props {
  content: string
  link: string
  stylesText?: string
}

export const EditableTitleLink = ({
  content,
  link,
  stylesText,
}: Editable2Props) => {
  const {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    value,
    handleWriting,
    sizes,
    refElement,
  } = useEdition(content)

  return (
    <>
      {availableToEdit ? (
        <>
          <textarea
            className={`
            mb-3 bg-transparent 
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
            value={content}
          />
          <textarea
            className={`
              absolute top-[30px] left-[35px] h-5
              text-[15px] font-light
              bg-transparent
              border-solid rounded-md border-[1px] border-[#6BDFDC]  
            `}
            style={{
              resize: "none",
            }}
            onChange={handleWriting}
            onDoubleClick={handleClickSave}
            value={link}
          />
        </>
      ) : (
        <div
          className={`
          border-solid rounded-md border-1 border-transparent
          ${stylesText}
        `}
          ref={refElement}
          onDoubleClick={handleClickActiveEdition}
        >
          {value}
        </div>
      )}
    </>
  )
}
