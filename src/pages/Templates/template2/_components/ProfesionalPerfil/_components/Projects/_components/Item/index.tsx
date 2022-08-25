import { Editable } from "@components/common"
import { Project_item } from "tree"
import { Tecnologies } from "../../../common"

type Categories =
  | "about"
  | "education"
  | "experiences"
  | "projects"
  | "skills"
  | "social"

type ItemProps = Project_item & {
  index: number
  category: Categories
}

export const Item = ({
  index,
  link: { icon, name, path },
  summary,
  tecnologies,
  category,
}: ItemProps) => (
  <div className="flex flex-col gap-[15px]">
    {/* company */}
    <a className="font-bold" href={path}>
      <div>{icon}</div> <div>{name}</div>
    </a>

    {/* summary */}
    <Editable name={`${category}.${index}.summary`} value={summary} />

    {/* tecnologies */}
    <Tecnologies {...{ tecnologies, last_index: index }} />
  </div>
)
