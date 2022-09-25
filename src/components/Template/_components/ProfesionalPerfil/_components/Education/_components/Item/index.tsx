import { Experience_item } from "tree"

import { Editable } from "@components/common"

import { Tecnologies } from "../../../common"

type ItemProps = Experience_item & {
  index: number
  category: "education"
}

export const Item = ({
  index,
  company,
  profesion,
  date: { start, end },
  summary,
  tecnologies,
  category,
}: ItemProps) => (
  <>
    <div className="flex justify-between font-bold">
      <div className="flex flex-col gap-1">
        {/*  */}
        <div className="max-w-[220px]">
          {/* company */}
          <Editable name={`${category}.${index}.company`} value={company} />
          {/* profesion */}
          <Editable name={`${category}.${index}.profesion`} value={profesion} />
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
)
