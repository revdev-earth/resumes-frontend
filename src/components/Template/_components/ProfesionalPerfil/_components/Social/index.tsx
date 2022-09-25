import { Social_item } from "tree"
import { Caparazon_category } from "../_common/Caparazon_category"
import { Capa_item } from "../_common/Capa_item"
import { useHook_remove_one } from "../_common/useHook_remove_one"

import { Item } from "./_components"

export const Social = ({ social }: { social: Social_item[] }) => {
  const { remove_item } = useHook_remove_one("social")

  return (
    <div className="flex flex-col gap-[15px]">
      <Caparazon_category category="social" title="Social:">
        {/* Content */}
        {/* Social items */}
        {social.length > 0 && (
          <div className="flex flex-col gap-[10px]">
            {social.map((item, index) => (
              <Capa_item key={item.id} {...{ id: item.id, remove_item }}>
                <Item {...{ social: item, category: "social", index }} />
              </Capa_item>
            ))}
          </div>
        )}
      </Caparazon_category>
    </div>
  )
}
