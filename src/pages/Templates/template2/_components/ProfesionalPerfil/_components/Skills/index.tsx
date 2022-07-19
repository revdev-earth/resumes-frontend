import { Item, items } from "./_components"

export const Skills = () => {
  return (
    <div>
      {/* Title */}
      <div>Skills:</div>

      {/* Content */}
      {/* Skills items */}
      <div>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
