import { Title } from "../common"
import { Item, items } from "./_components"

export const Education = () => {
  return (
    <div className="flex flex-col gap-[25px]">
      {/* Title */}
      <Title>Education:</Title>

      {/* Content */}
      {/* Education items */}
      <div className="flex flex-col gap-[20px]">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
