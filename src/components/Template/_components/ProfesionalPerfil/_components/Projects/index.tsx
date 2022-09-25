import { Project_item } from "tree"
import { Caparazon_category } from "../_common/Caparazon_category"
import { useHook_remove_one } from "../_common/useHook_remove_one"
import { Item } from "./_components"

export const Projects = ({ projects }: { projects: Project_item[] }) => {
  const { remove_item } = useHook_remove_one("projects")

  return (
    <Caparazon_category category="projects" title="Projects:">
      {/* Content */}
      {/* Projects items */}
      <div className="flex flex-col gap-[20px]">
        {projects.map((item, index) => (
          <Item
            category="projects"
            key={item.id}
            {...{ ...item, index, remove_item }}
          />
        ))}
      </div>
    </Caparazon_category>
  )
}
