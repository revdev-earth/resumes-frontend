import { Editable } from "@components/common"
import { Skill_item } from "tree"

type ItemProps = Skill_item & {
  index: number
  category: "skills"
  remove_item: any
}

export const Item = ({ index, name, years, category }: ItemProps) => (
  <div className="flex font-medium">
    {/* name */}
    <Editable
      stylesText="w-[150px]"
      name={`${category}.${index}.name`}
      value={name}
    />
    {/* years */}
    <div className="flex">
      <Editable
        stylesText="mr-[3px]"
        name={`${category}.${index}.years`}
        value={String(years)}
      />
      years
    </div>
  </div>
)
