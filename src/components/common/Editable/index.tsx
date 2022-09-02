//field

import { useSelector } from "@redux"
import { triple_click_detection } from "@utils/triple_click_detection"
import { useState } from "react"
import { Loader } from "../Loader"
import { useEditionResume, useEditionBusinessCard } from "./_components"

type EditableProps = {
  name: string
  value: string
  stylesText?: string
}

// styles
const useStyles = (stylesText) => {
  return {
    styles_text_area: `
      relative
      flex bg-transparent
      border-solid rounded-md 
      border-[1px] border-[#6BDFDC]
      ${stylesText}
    `,

    styles_div: `
      relative
      flex flex-col
      rounded-md
      border-[1px] border-transparent
      ${stylesText}
    `,

    styles_button: `
      absolute left-[38%] -top-5 
      cursor-pointer 
      animate-fade-in 
      pb-2 px-5
    `,
  }
}

const useHandlers = (handleClickActiveEdition, handleClickSave) => {
  const { role } = useSelector((s) => s.app.auth)

  const [show, set_show] = useState(false)

  const handle_mose_over = () => {
    set_show(true)
  }

  const handle_mose_leave = () => {
    set_show(false)
  }

  const handle_click_text_area = () => {
    const triple_click_detected = triple_click_detection()
    if (triple_click_detected) handleClickSave()
  }

  const handle_click_div = () => {
    const triple_click_detected = triple_click_detection()
    if (triple_click_detected) handleClickActiveEdition()
  }

  const handlers_div = {
    onMouseOver: handle_mose_over,
    onMouseLeave: handle_mose_leave,
    onTouchStart: () => {
      handle_mose_over()
      handle_click_div()
    },
    onClick: handle_click_div,
  }

  const handlers_text_area = {
    onMouseOver: handle_mose_over,
    onMouseLeave: handle_mose_leave,
    onTouchStart: () => {
      handle_mose_over()
      handle_click_text_area()
    },
    onClick: handle_click_text_area,
  }

  const handle_click_edition = () => {
    set_show(false)
    handleClickActiveEdition()
  }

  const handle_click_save = () => {
    set_show(true)
    handleClickSave()
  }

  return {
    handlers_div: role !== "reader" ? handlers_div : {},
    handlers_text_area: role !== "reader" ? handlers_text_area : {},
    show,
    handle_click_edition,
    handle_click_save,
  }
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
  const { styles_text_area, styles_div, styles_button } = useStyles(stylesText)

  const {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    value,
    handleWriting,
    sizes,
    refElement,
  } = resume_editor

  const {
    handlers_div,
    handlers_text_area,
    show,
    handle_click_edition,
    handle_click_save,
  } = useHandlers(handleClickActiveEdition, handleClickSave)

  // components

  const components = () =>
    !/\r|\n/.exec(value)
      ? value
      : value.split(/\n/).map((v: string) => {
          if (v.length === 0) return <br key={Math.random() * 5} />
          return <div key={Math.random() * 5}>{v}</div>
        })

  // return

  return (
    <>
      {availableToEdit ? (
        <div className="relative">
          <div className={styles_button} onClick={handle_click_save}>
            save
          </div>

          <textarea
            {...{
              ...handlers_text_area,
              value,
              className: styles_text_area,
              onChange: handleWriting,
              style: {
                width:
                  sizes.offsetWidth < 80
                    ? sizes.offsetWidth + 1
                    : sizes.offsetWidth,
                height: sizes.offsetWidth < 40 ? "26px" : sizes.offsetHeight,
                resize: "none",
              },
            }}
          />
        </div>
      ) : (
        <div
          {...{
            ...handlers_div,
            className: styles_div,
            ref: refElement,
            onClick: handleClickActiveEdition,
          }}
        >
          <>
            {show && (
              <div className={styles_button} onClick={handle_click_edition}>
                edit
              </div>
            )}
            {components()}
          </>
        </div>
      )}
    </>
  )
}
