import { Social_item } from "tree"
import { Title } from "../common"
import { Item } from "./_components"

export const Social = ({ social }: { social: Social_item[] }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      {/* Title */}
      <Title>Social:</Title>

      {/* Content */}
      {/* Social items */}
      <div className="flex flex-col gap-[10px]">
        {social.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
