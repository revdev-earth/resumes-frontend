import { Item, items } from "./_components"

export const Experiences = () => {
  return (
    <div>
      {/* Title */}
      <div>Experiences:</div>

      {/* Content */}
      {/* Experiences items */}
      <div>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
