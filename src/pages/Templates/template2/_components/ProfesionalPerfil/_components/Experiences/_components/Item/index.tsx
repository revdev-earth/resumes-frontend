import { Editable } from "@components/common"
import { Experience_item } from "tree"
import { Tecnologies } from "../../../common"

type ItemProps = Experience_item & {
  index: number
}

export const Item = ({
  // index,
  company,
  profesion,
  date: { start, end },
  summary,
  tecnologies,
}: ItemProps) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex justify-between font-bold">
        <div className="flex gap-[5px]">
          {/* company */}

          <div className="max-w-[120px]">
            <Editable name={`experiences.0.company`} value={company} />
          </div>

          <div>-</div>

          {/* title */}
          <div>{profesion}</div>
        </div>
        {/* date */}
        <div>
          {start} - {end}
        </div>
      </div>

      {/* summary */}
      <div>{summary}</div>

      {/* tecnologies */}
      <Tecnologies {...{ tecnologies }} />
    </div>
  )
}
