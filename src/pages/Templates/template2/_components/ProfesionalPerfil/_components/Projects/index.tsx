import { Item, items } from "./_components"

export const Projects = () => {
  return (
    <div>
      {/* Title */}
      <div>Projects:</div>

      {/* Content */}
      {/* Projects items */}
      <div>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
