import { Skill_item } from "tree"
import { Title } from "../common"
import { Item } from "./_components"

export const Skills = ({ skills }: { skills: Skill_item[] }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      {/* Title */}
      <Title>Skills:</Title>

      {/* Content */}
      {/* Skills items */}
      <div className="flex flex-col gap-[10px]">
        {skills.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
