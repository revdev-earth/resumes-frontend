//field

import { useEdition } from "./_components"

interface EditableProps {
  name: string
  value: string
  stylesText?: string
}

export const Editable = ({
  name,
  value: valueIncomming,
  stylesText = "",
}: EditableProps) => {
  const {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    value,
    handleWriting,
    sizes,
    refElement,
  } = useEdition(valueIncomming, name)

  const components = () =>
    !/\r|\n/.exec(value)
      ? value
      : value.split(/\n/).map((v: string) => {
          if (v.length === 0) return <br key={Math.random() * 5} />
          return <div key={Math.random() * 5}>{v}</div>
        })

  const styles_text_area = `
    flex bg-transparent
    border-solid rounded-md 
    border-[1px] border-[#6BDFDC]
    ${stylesText}
  `

  const styles_div = `
    flex border-solid 
    rounded-md border-1 
    border-transparent
    p-[1px]
    ${stylesText}
  `

  return (
    <>
      {availableToEdit ? (
        <textarea
          className={styles_text_area}
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
          className={styles_div}
          ref={refElement}
          onDoubleClick={handleClickActiveEdition}
        >
          {components()}
        </div>
      )}
    </>
  )
}
