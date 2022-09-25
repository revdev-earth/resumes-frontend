import { useState } from "react"
import { useHook_add_one } from "../useHook_add_one"

export const useHook_tools = (category) => {
  const { add_category } = useHook_add_one(category)
  const [show_add_new_category, set_show_add_new_category] = useState(false)

  const handle_mose_over_title = () => {
    set_show_add_new_category(true)
  }

  const handle_mose_leave_title = () => {
    set_show_add_new_category(false)
  }

  const handle_click_add = () => {
    // aqui vamos a agregar uno mas a la lista de experiencias y despues lo vamos a guardar
    add_category()
  }

  const handlers = {
    onMouseOver: handle_mose_over_title,
    onMouseLeave: handle_mose_leave_title,
  }

  return { handlers, handle_click_add, show_add_new_category }
}
