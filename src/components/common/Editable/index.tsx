//field
import { useEdition } from "./_components"

interface EditableProps {
  value: string
  stylesText?: string
}

export const Editable = ({
  value: valueIncomming,
  stylesText,
}: EditableProps) => {
  const {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    value,
    handleWriting,
    sizes,
    refElement,
  } = useEdition(valueIncomming)

  return (
    <>
      {availableToEdit ? (
        <textarea
          className={`
            ${stylesText}
          `}
          style={{
            width: sizes.offsetWidth,
            height: sizes.offsetHeight,
            resize: "none",
          }}
          onChange={handleWriting}
          onDoubleClick={handleClickSave}
          value={value}
        />
      ) : (
        <div
          className={stylesText}
          ref={refElement}
          onDoubleClick={handleClickActiveEdition}
        >
          {value}
        </div>
      )}
    </>
  )
}
