import { Title } from "../common"
import { Item, items } from "./_components"

export const Projects = () => {
  return (
    <div className="flex flex-col gap-[15px]">
      {/* Title */}
      <Title>Projects:</Title>

      {/* Content */}
      {/* Projects items */}
      <div className="flex flex-col gap-[20px]">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
