import { Project_item } from "tree"
import { Title } from "../common"
import { Item } from "./_components"

export const Projects = ({ projects }: { projects: Project_item[] }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      {/* Title */}
      <Title>Projects:</Title>

      {/* Content */}
      {/* Projects items */}
      <div className="flex flex-col gap-[20px]">
        {projects.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
