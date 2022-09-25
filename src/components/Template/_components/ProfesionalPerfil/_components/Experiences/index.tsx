import { Experience_item } from "tree"

import { Caparazon_category } from "../_common/Caparazon_category"
import { Capa_item } from "../_common/Capa_item"

import { useHook_remove_one } from "../_common/useHook_remove_one"

import { Item } from "./_components"

export const Experiences = ({
  experiences,
}: {
  experiences: Experience_item[]
}) => {
  //

  const { remove_item } = useHook_remove_one("experiences")

  return (
    <Caparazon_category category="experiences" title="Experiences:">
      {/* Content */}
      {/* Experiences items */}
      {experiences.length > 0 && (
        <div className="flex flex-col gap-[20px]">
          {experiences.map((item, index) => (
            <Capa_item key={item.id} {...{ id: item.id, remove_item }}>
              <Item category="experiences" {...{ ...item, index }} />
            </Capa_item>
          ))}
        </div>
      )}
    </Caparazon_category>
  )
}
