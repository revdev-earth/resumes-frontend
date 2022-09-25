import { Skill_item } from "tree"
import { Capa_item } from "../_common/Capa_item"
import { Caparazon_category } from "../_common/Caparazon_category"
import { useHook_remove_one } from "../_common/useHook_remove_one"
import { Item } from "./_components"

export const Skills = ({ skills }: { skills: Skill_item[] }) => {
  const { remove_item } = useHook_remove_one("skills")

  return (
    <div className="flex flex-col gap-[15px]">
      <Caparazon_category category="skills" title="Skills:">
        {/* Content */}
        {/* Skills items */}
        {skills.length > 0 && (
          <div className="flex flex-col gap-[10px]">
            {skills.map((item, index) => (
              <Capa_item key={item.id} {...{ id: item.id, remove_item }}>
                <Item category="skills" {...{ ...item, index, remove_item }} />
              </Capa_item>
            ))}
          </div>
        )}
      </Caparazon_category>
    </div>
  )
}
