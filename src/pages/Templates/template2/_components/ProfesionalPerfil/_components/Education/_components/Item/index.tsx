import { Tecnologies } from "../../../common"

export const Item = ({
  institute,
  title,
  date: { start, end },
  summary,
  tecnologies,
}: any) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex justify-between font-bold">
        <div className="flex gap-[5px]">
          {/* institute */}
          <div className="max-w-[120px]">
            <div className="max-w-[120px] truncate hover:text-clip hover:whitespace-normal hover:absolute bg-slate-50 z-10 hover:pb-[5px] hover:rounded">
              {institute}
            </div>
          </div>

          <div>-</div>

          {/* title */}
          <div>{title}</div>
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
