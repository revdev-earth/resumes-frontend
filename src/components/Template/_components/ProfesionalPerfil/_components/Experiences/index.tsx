import { Experience_item } from "tree"
import { Caparazon_category } from "../_common/Caparazon_category"
import { useHook_remove_one } from "../_common/useHook_remove_one"
import { Item } from "./_components"

export const Experiences = ({
  experiences,
}: {
  experiences: Experience_item[]
}) => {
  const { remove_item } = useHook_remove_one("experiences")
  return (
    <Caparazon_category category="experiences" title="Experiences:">
      {/* Content */}
      {/* Experiences items */}
      <div className="flex flex-col gap-[20px]">
        {experiences.map((item, index) => (
          <Item
            category="experiences"
            key={item.id}
            {...{ ...item, index, remove_item }}
          />
        ))}
      </div>
    </Caparazon_category>
  )
}
