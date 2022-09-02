import { useSelector } from "@redux"

import { triple_click_detection } from "@utils"

import { useState } from "react"

// styles
const useStyles = (stylesText) => ({
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
})

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

  const handlers_editer = {
    onMouseOver: handle_mose_over,
    onMouseLeave: handle_mose_leave,
    onTouchStart: () => {
      handle_mose_over()
      handle_click_div()
    },
    onClick: handle_click_div,
  }

  const handlers_saver = {
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
    handlers_editer: role !== "reader" ? handlers_editer : {},
    handlers_saver: role !== "reader" ? handlers_saver : {},
    show,
    handle_click_edition,
    handle_click_save,
  }
}

export const EditableIsolationAndActionsMouseTouch = ({
  availableToEdit,
  divs,
  text_areas,
  handleClickActiveEdition,
  handleClickSave,
  stylesText,
  refElement,
}) => {
  //

  // eslint-disable-next-line no-unused-vars
  const { styles_button, styles_div } = useStyles(stylesText)

  const {
    handlers_editer,
    // eslint-disable-next-line no-unused-vars
    handlers_saver,
    show,
    handle_click_edition,
    handle_click_save,
  } = useHandlers(handleClickActiveEdition, handleClickSave)

  const etwas = (
    <>
      {availableToEdit ? (
        <div className="relative">
          <div className={styles_button} onClick={handle_click_save}>
            save
          </div>

          {text_areas}
        </div>
      ) : (
        <div
          {...{
            ...handlers_editer,
            className: styles_div,
            ref: refElement,
            onClick: handleClickActiveEdition,
          }}
        >
          {show && (
            <div className={styles_button} onClick={handle_click_edition}>
              edit
            </div>
          )}
          {divs}
        </div>
      )}
    </>
  )

  return etwas
}
