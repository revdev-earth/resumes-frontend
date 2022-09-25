import { useSelector } from "@redux"

import { triple_click_detection } from "@utils"

import { useState } from "react"
import { styles_button_edit, styles_button_save } from "./_common/styles"

// styles
const styles_div = `
relative
flex flex-col
rounded-md
border-[1px] border-transparent
`

const useHandlers = (handleClickActiveEdition, handleClickSave) => {
  const { role } = useSelector((s) => s.app.auth)
  const [timer_id, set_timer_id] = useState<any>()

  const [show, set_show] = useState(false)

  const handle_mose_over = () => {
    clearTimeout(timer_id)
    set_show(true)
  }

  const handle_mose_leave = () => {
    clearTimeout(timer_id)
    const timer_before = setTimeout(() => {
      set_show(false)
    }, 500)
    set_timer_id(timer_before)
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
    // onMouseOver: handle_mose_over,
    // onMouseLeave: handle_mose_leave,
    onTouchStart: () => {
      // handle_mose_over()
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

export const EditableDeciderCommonAbstraction = ({
  availableToEdit,
  divs,
  text_areas,
  handleClickActiveEdition,
  handleClickSave,
  // stylesText,
  refElement,
}) => {
  //

  const {
    handlers_editer,
    handlers_saver,
    show,
    handle_click_edition,
    handle_click_save,
  } = useHandlers(handleClickActiveEdition, handleClickSave)

  const etwas = (
    <>
      {availableToEdit ? (
        <div className="relative" {...handlers_saver}>
          <div className={styles_button_save} onClick={handle_click_save}>
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
          }}
        >
          {show && (
            <div className={styles_button_edit} onClick={handle_click_edition}>
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
