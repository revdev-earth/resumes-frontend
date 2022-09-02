import {
  useGetResumeWithJwtQuery,
  usePutResumeMutation,
} from "@redux/api/endpoints"
import { useState } from "react"
import { Experience_item, tree } from "tree"
import { Title } from "../common"
import { Item } from "./_components"

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const make_id = () => Number(`${getRandomInt(1, 9)}${new Date().getTime()}`)

const useAddOne = (category: string) => {
  const { data: resume_table } = useGetResumeWithJwtQuery({})

  const resume = JSON.parse(resume_table.content)

  const [updateResume] = usePutResumeMutation()

  const add_category = () => {
    updateResume({
      content: JSON.stringify({
        ...resume,
        [category]: [
          ...resume[category],
          {
            ...tree.resume[category][0],
            id: make_id(),
          },
        ],
      }),
    })
  }

  const remove_item = (id: number) => {
    updateResume({
      content: JSON.stringify({
        ...resume,
        [category]: [
          ...resume[category].filter((item) => {
            if (id === item.id) return false
            return true
          }),
        ],
      }),
    })
  }

  return {
    add_category,
    remove_item,
  }
}

const useExperiences = () => {
  const { add_category, remove_item } = useAddOne("experiences")
  const [show_add_new_experience, set_show_add_new_experience] = useState(false)

  const handle_mose_over_title = () => {
    set_show_add_new_experience(true)
  }

  const handle_mose_leave_title = () => {
    set_show_add_new_experience(false)
  }

  const handle_click_add = () => {
    // aqui vamos a agregar uno mas a la lista de experiencias y despues lo vamos a guardar
    add_category()
  }

  const handlers = {
    onMouseOver: handle_mose_over_title,
    onMouseLeave: handle_mose_leave_title,
  }

  return { handlers, handle_click_add, remove_item, show_add_new_experience }
}

export const Experiences = ({
  experiences,
}: {
  experiences: Experience_item[]
}) => {
  const { handlers, handle_click_add, remove_item, show_add_new_experience } =
    useExperiences()

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

      {/* Content */}
      {/* Experiences items */}
      <div className="flex flex-col gap-[20px]">
        {experiences.map((item, index) => (
          <Item
            category="experiences"
            key={item.id}
            {...{ ...item, index, remove_item }}
          />
        ))}
      </div>
    </div>
  )
}
