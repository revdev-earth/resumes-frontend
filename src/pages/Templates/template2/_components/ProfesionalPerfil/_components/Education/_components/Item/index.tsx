import { Education_item } from "tree"
import { Tecnologies } from "../../../common"

export const Item = ({
  company,
  profesion,
  date: { start, end },
  summary,
  tecnologies,
}: Education_item) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex justify-between font-bold">
        <div className="flex gap-[5px]">
          {/* institute */}
          <div className="max-w-[120px]">
            <div className="max-w-[120px] truncate hover:text-clip hover:whitespace-normal hover:absolute bg-slate-50 z-10 hover:pb-[5px] hover:rounded">
              {company}
            </div>
          </div>

          <div>-</div>

          {/* title */}
          <div>{profesion}</div>
          {/* date */}
        </div>
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
