import { Editable } from "@components/common"
import { Experience_item } from "tree"
import { Tecnologies } from "../../../common"

type Categories =
  | "about"
  | "education"
  | "experiences"
  | "projects"
  | "skills"
  | "social"

type ItemProps = Experience_item & {
  index: number
  category: Categories
}

export const Item = ({
  index,
  company,
  profesion,
  date: { start, end },
  summary,
  tecnologies,
  category = "experiences",
}: ItemProps) => (
  <div className="flex flex-col gap-[15px]">
    <div className="flex justify-between font-bold">
      <div className="flex gap-[5px]">
        {/* company */}

        <div className="max-w-[120px]">
          <Editable name={`${category}.${index}.company`} value={company} />
        </div>

        <div>-</div>

        {/* profesion */}
        <Editable name={`${category}.${index}.profesion`} value={profesion} />
      </div>
      {/* date */}
      <div>
        <Editable name={`${category}.${index}.date.start`} value={start} />
        -
        <Editable name={`${category}.${index}.date.end`} value={end} />
      </div>
    </div>

    {/* summary */}
    <Editable name={`${category}.${index}.summary`} value={summary} />

    {/* tecnologies */}
    <Tecnologies {...{ tecnologies, last_index: index }} />
  </div>
)
