import { Experience_item } from "tree"
import { Title } from "../common"
import { Item } from "./_components"

export const Experiences = ({
  experiences,
}: {
  experiences: Experience_item[]
}) => {
  return (
    <div className="flex flex-col gap-[25px]">
      {/* Title */}
      <Title>Experiences:</Title>

      {/* Content */}
      {/* Experiences items */}
      <div className="flex flex-col gap-[20px]">
        {experiences.map((item, index) => (
          <Item key={item.id} {...{ ...item, index }} />
        ))}
      </div>
    </div>
  )
}
