import { EditableSocial } from "@components/common/EditableSocial"
import { Social_item } from "tree"

type ItemProps = {
  index: number
  category: "social"
  social: Social_item
}

export const Item = ({ index, social, category }: ItemProps) => (
  <EditableSocial name={`${category}.${index}`} {...{ social }} />
)
