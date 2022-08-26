import { Editable } from "@components/common"
import { Project_item } from "tree"
import { Tecnologies } from "../../../common"

import { EditableLinkIconName } from "@components/common/EditableLinkIconName"

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
  link,
  summary,
  tecnologies,
  category,
}: ItemProps) => (
  <div className="flex flex-col gap-[15px]">
    {/* company */}
    <EditableLinkIconName
      name={`${category}.${index}.link`}
      value={summary}
      {...{ link }}
    />

    {/* summary */}
    <Editable name={`${category}.${index}.summary`} value={summary} />

    {/* tecnologies */}
    <Tecnologies {...{ tecnologies, last_index: index }} />
  </div>
)
