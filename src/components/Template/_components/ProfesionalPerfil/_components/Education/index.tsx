import { Education_item } from "tree"
import { Caparazon_category } from "../_common/Caparazon_category"
import { useHook_remove_one } from "../_common/useHook_remove_one"
import { Item } from "./_components"

export const Education = ({
  education: education_items,
}: {
  education: Education_item[]
}) => {
  const { remove_item } = useHook_remove_one("education")
  return (
    <Caparazon_category category="education" title="Education:">
      {/* Content */}
      {/* Education items */}
      <div className="flex flex-col gap-[20px]">
        {education_items.map((item, index) => (
          <Item
            category="education"
            key={item.id}
            {...{ ...item, index, remove_item }}
          />
        ))}
      </div>
    </Caparazon_category>
  )
}
