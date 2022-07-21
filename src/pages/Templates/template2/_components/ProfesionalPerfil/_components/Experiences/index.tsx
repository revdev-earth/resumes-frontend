import { Title } from "../common"
import { Item, items } from "./_components"

export const Experiences = () => {
  return (
    <div className="flex flex-col gap-[25px]">
      {/* Title */}
      <Title>Experiences:</Title>

      {/* Content */}
      {/* Experiences items */}
      <div className="flex flex-col gap-[20px]">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
