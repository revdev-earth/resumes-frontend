import { Editable } from "@components/common"
import { Project_item } from "tree"
import { Tecnologies } from "../../../common"

import { EditableProjectsLink } from "@components/editables/EditableProjectsLink"
import { Capa_item } from "../../../_common/Capa_item"

type ItemProps = Project_item & {
  index: number
  category: "projects"
  remove_item: any
}

export const Item = ({
  id,
  index,
  link,
  summary,
  tecnologies,
  category,
  remove_item,
}: ItemProps) => (
  <Capa_item {...{ id, remove_item }}>
    <div className="flex flex-col gap-[15px]">
      {/* company */}
      <EditableProjectsLink name={`${category}.${index}.link`} {...{ link }} />

      {/* summary */}
      <Editable name={`${category}.${index}.summary`} value={summary} />

      {/* tecnologies */}
      <Tecnologies {...{ tecnologies, last_index: index }} />
    </div>
  </Capa_item>
)
