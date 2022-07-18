import { Item, items } from "./_components"

export const Social = () => {
  return (
    <div>
      {/* Title */}
      <div>Social:</div>

      {/* Content */}
      {/* Social items */}
      <div>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
