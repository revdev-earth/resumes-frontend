import { Editable } from "@components/common"
import { useState } from "react"
import { Experience_item } from "tree"
import { Tecnologies } from "../../../common"

type Categories =
  | "about"
  | "education"
  | "experiences"
  | "projects"
  | "skills"
  | "social"

type ItemProps = Experience_item & {
  index: number
  category: Categories
  remove_item: any // method with 1 parameter number
}

const useEtwas = (id, remove_item) => {
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

export const Item = ({
  id,
  index,
  company,
  profesion,
  date: { start, end },
  summary,
  tecnologies,
  category = "experiences",
  remove_item,
}: ItemProps) => {
  const { handlers, handle_delete_item, show_delete_button } = useEtwas(
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
      <div className="flex justify-between font-bold">
        <div className="flex flex-col gap-1">
          {/*  */}
          <div className="max-w-[220px]">
            {/* company */}
            <Editable name={`${category}.${index}.company`} value={company} />
            {/* profesion */}
            <Editable
              name={`${category}.${index}.profesion`}
              value={profesion}
            />
          </div>
        </div>
        {/* date */}
        <div className="flex gap-1">
          <Editable name={`${category}.${index}.date.start`} value={start} />
          -
          <Editable name={`${category}.${index}.date.end`} value={end} />
        </div>
      </div>

      {/* summary */}
      <Editable name={`${category}.${index}.summary`} value={summary} />

      {/* tecnologies */}
      <Tecnologies {...{ tecnologies, last_index: index }} />
    </div>
  )
}
