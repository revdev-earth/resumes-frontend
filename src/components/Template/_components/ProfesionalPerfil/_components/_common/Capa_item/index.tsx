import { useState } from "react"

type ItemProps = {
  id: number
  remove_item: any // method with 1 parameter number
  children: React.ReactElement
}

const useCapaItem = (id, remove_item) => {
  const [show_delete_button, set_show_delete_button] = useState(false)

  const handle_mose_over_item = () => {
    set_show_delete_button(true)
  }

  const handle_mose_leave_item = () => {
    set_show_delete_button(false)
  }

  const handle_delete_item = () => {
    remove_item(id)
  }

  const handlers = {
    onMouseOver: handle_mose_over_item,
    onMouseLeave: handle_mose_leave_item,
  }

  return {
    handlers,
    handle_delete_item,
    show_delete_button,
  }
}

export const Capa_item = ({ id, remove_item, children }: ItemProps) => {
  const { handlers, handle_delete_item, show_delete_button } = useCapaItem(
    id,
    remove_item
  )

  return (
    <div className="flex flex-col gap-[15px] relative" {...handlers}>
      {show_delete_button && (
        <button
          className="absolute left-1/2 animate-fade-in"
          onClick={handle_delete_item}
        >
          delete
        </button>
      )}
      {children}
    </div>
  )
}
