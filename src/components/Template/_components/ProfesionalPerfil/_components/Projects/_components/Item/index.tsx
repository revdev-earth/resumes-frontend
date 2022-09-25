import { Project_item } from "tree"

import { Editable } from "@components/common"
import { EditableProjectsLink } from "@components/editables/EditableProjectsLink"

import { Tecnologies } from "../../../common"

type ItemProps = Project_item & {
  index: number
  category: "projects"
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
    <EditableProjectsLink name={`${category}.${index}.link`} {...{ link }} />

    {/* summary */}
    <Editable name={`${category}.${index}.summary`} value={summary} />

    {/* tecnologies */}
    <Tecnologies {...{ tecnologies, last_index: index }} />
  </div>
)
