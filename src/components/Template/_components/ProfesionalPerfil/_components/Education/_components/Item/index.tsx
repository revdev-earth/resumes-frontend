import { Editable } from "@components/common"
import { Categories } from "@Types"
import { Experience_item } from "tree"
import { Tecnologies } from "../../../common"
import { Capa_item } from "../../../_common/Capa_item"

type ItemProps = Experience_item & {
  id: number
  index: number
  category: Categories
  remove_item: any // method with 1 parameter number
}

export const Item = ({
  id,
  index,
  company,
  profesion,
  date: { start, end },
  summary,
  tecnologies,
  category,
  remove_item,
}: ItemProps) => (
  <Capa_item {...{ id, remove_item }}>
    <>
      <div className="flex justify-between font-bold">
        <div className="flex flex-col gap-1">
          {/*  */}
          <div className="max-w-[220px]">
            {/* company */}
            <Editable name={`${category}.${index}.company`} value={company} />
            {/* profesion */}
            <Editable
              name={`${category}.${index}.profesion`}
              value={profesion}
            />
          </div>
        </div>
        {/* date */}
        <div className="flex gap-1">
          <Editable name={`${category}.${index}.date.start`} value={start} />
          <div>-</div>
          <Editable name={`${category}.${index}.date.end`} value={end} />
        </div>
      </div>

      {/* summary */}
      <Editable name={`${category}.${index}.summary`} value={summary} />

      {/* tecnologies */}
      <Tecnologies {...{ tecnologies, last_index: index }} />
    </>
  </Capa_item>
)
