import { Education_item } from "tree"
import { Title } from "../common"
import { Item } from "./_components"

export const Education = ({
  education: education_items,
}: {
  education: Education_item[]
}) => {
  return (
    <div className="flex flex-col gap-[25px]">
      {/* Title */}
      <Title>Education:</Title>

      {/* Content */}
      {/* Education items */}
      <div className="flex flex-col gap-[20px]">
        {education_items.map((item, index) => (
          <Item category="education" key={item.id} {...{ ...item, index }} />
        ))}
      </div>
    </div>
  )
}
