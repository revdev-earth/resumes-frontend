import { EditableIsolationAndActionsMouseTouch } from "../EditableIsolationAndActionsMouseTouch"
import { Loader } from "../Loader"
import { useEditionResume, useEditionBusinessCard } from "./_components"

type EditableProps = {
  name: string
  value: string
  stylesText?: string
}

type TypesEditable = {
  type_editable?: "resume" | "bussiness_card"
  name: string
  value: string
  stylesText?: string
}

export const Editable = ({
  type_editable = "resume",
  ...args
}: TypesEditable) => {
  switch (type_editable) {
    case "resume":
      return <EditableResume {...args} />

    case "bussiness_card":
      return <EditableBussinessCard {...args} />

    default:
      return <Loader />
  }
}

const EditableResume = ({ ...args }: EditableProps) => {
  const editor = useEditionResume(args.value, args.name)

  return (
    <EditableResumeContent
      {...{
        ...args,
        editor,
      }}
    />
  )
}

const EditableBussinessCard = ({ ...args }: EditableProps) => {
  const editor = useEditionBusinessCard(args.value, args.name)

  return (
    <EditableResumeContent
      {...{
        ...args,
        editor,
      }}
    />
  )
}

const EditableResumeContent = ({ stylesText = "", editor: resume_editor }) => {
  const {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    value,
    handleWriting,
    sizes,
    refElement,
  } = resume_editor

  // text area

  const styles_text_area = `
  relative
  flex bg-transparent
  border-solid rounded-md 
  border-[1px] border-[#6BDFDC]
  ${stylesText}
`

  const text_area = (
    <textarea
      {...{
        value,
        className: styles_text_area,
        onChange: handleWriting,
        style: {
          width:
            sizes.offsetWidth < 80 ? sizes.offsetWidth + 1 : sizes.offsetWidth,
          height: sizes.offsetWidth < 40 ? "26px" : sizes.offsetHeight,
          resize: "none",
        },
      }}
    />
  )

  // components

  const components = !/\r|\n/.exec(value)
    ? value
    : value.split(/\n/).map((v: string) => {
        if (v.length === 0) return <br key={Math.random() * 5} />
        return <div key={Math.random() * 5}>{v}</div>
      })

  // return

  return (
    <EditableIsolationAndActionsMouseTouch
      {...{
        availableToEdit,
        divs: components,
        text_areas: text_area,
        handleClickActiveEdition,
        handleClickSave,
        stylesText,
        refElement,
      }}
    />
  )
}
