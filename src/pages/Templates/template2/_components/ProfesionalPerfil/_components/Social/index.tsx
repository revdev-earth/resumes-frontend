import { Title } from "../common"
import { Item, items } from "./_components"

export const Social = () => {
  return (
    <div className="flex flex-col gap-[15px]">
      {/* Title */}
      <Title>Social:</Title>

      {/* Content */}
      {/* Social items */}
      <div className="flex flex-col gap-[10px]">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
