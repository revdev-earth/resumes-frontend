import { Item, items } from "./_components"

export const Education = () => {
  return (
    <div>
      {/* Title */}
      <div>Education:</div>

      {/* Content */}
      {/* Education items */}
      <div>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
