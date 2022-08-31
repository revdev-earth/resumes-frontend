import { useState } from "react"
import { Experience_item } from "tree"
import { Title } from "../common"
import { Item } from "./_components"

export const Experiences = ({
  experiences,
}: {
  experiences: Experience_item[]
}) => {
  const [show_add_new_experience, set_show_add_new_experience] = useState(false)
  const handle_mose_over_title = () => {
    set_show_add_new_experience(true)
  }

  const handle_mose_leave_title = () => {
    set_show_add_new_experience(false)
  }

  const handle_click_add = () => {
    // aqui vamos a agregar uno mas a la lista de experiencias y despues lo vamos a guardar
  }

  const handlers = {
    onMouseOver: handle_mose_over_title,
    onMouseLeave: handle_mose_leave_title,
  }
  return (
    <div className="flex flex-col gap-[25px]">
      {/* Title */}
      <Title {...handlers}>
        Experiences:
        {show_add_new_experience && (
          <div
            className="absolute top-[-100%] cursor-pointer"
            onClick={handle_click_add}
          >
            Add Experience
          </div>
        )}
      </Title>

      {/* cuando hace hover aparece el mas y 
      podes agregar la otra opcion automaticamente */}

      {/* Content */}
      {/* Experiences items */}
      <div className="flex flex-col gap-[20px]">
        {experiences.map((item, index) => (
          <Item category="experiences" key={item.id} {...{ ...item, index }} />
        ))}
      </div>
    </div>
  )
}
