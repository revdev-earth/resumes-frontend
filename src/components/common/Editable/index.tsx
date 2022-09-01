//field

import { useSelector } from "@redux"
import { useState } from "react"
import { useEdition } from "./_components"

interface EditableProps {
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
let clicks_count = 0
let time_out

const triple_click_detection = () => {
  // onclick:
  clicks_count++
  clearTimeout(time_out)
  time_out = setTimeout(() => {
    clicks_count = 0
  }, 450)

  if (clicks_count === 3) {
    clicks_count = 0
    return true
  }

  return false
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
    ontouchstart: () => {
      handle_mose_over()
      handle_click_div()
    },
    onClick: handle_click_div,
  }

  const handlers_text_area = {
    onMouseOver: handle_mose_over,
    onMouseLeave: handle_mose_leave,
    ontouchstart: () => {
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

export const Editable = ({
  name,
  value: valueIncomming,
  stylesText = "",
}: EditableProps) => {
  const { styles_text_area, styles_div, styles_button } = useStyles(stylesText)

  const {
    availableToEdit,
    handleClickActiveEdition,
    handleClickSave,
    value,
    handleWriting,
    sizes,
    refElement,
  } = useEdition(valueIncomming, name)

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
              style: {
                width:
                  sizes.offsetWidth < 80
                    ? sizes.offsetWidth + 1
                    : sizes.offsetWidth,
                height: sizes.offsetWidth < 40 ? "26px" : sizes.offsetHeight,
                resize: "none",
              },
              onChange: handleWriting,
            }}
          />
        </div>
      ) : (
        <div
          className={`${styles_div}`}
          ref={refElement}
          onClick={handleClickActiveEdition}
          {...handlers_div}
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
