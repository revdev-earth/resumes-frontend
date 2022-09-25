import { Education_item } from "tree"

import { Caparazon_category } from "../_common/Caparazon_category"
import { Capa_item } from "../_common/Capa_item"

import { useHook_remove_one } from "../_common/useHook_remove_one"

import { Item } from "./_components"

export const Education = ({
  education: education_items,
}: {
  education: Education_item[]
}) => {
  //

  const { remove_item } = useHook_remove_one("education")

  return (
    <Caparazon_category category="education" title="Education:">
      {/* Content */}
      {/* Education items */}
      {education_items.length > 0 && (
        <div className="flex flex-col gap-[20px]">
          {education_items.map((item, index) => (
            <Capa_item key={item.id} {...{ id: item.id, remove_item }}>
              <Item category="education" {...{ ...item, index }} />
            </Capa_item>
          ))}
        </div>
      )}
    </Caparazon_category>
  )
}
