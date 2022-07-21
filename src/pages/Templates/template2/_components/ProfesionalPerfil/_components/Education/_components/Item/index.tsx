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
          <div className="max-w-[120px]">{institute}</div>

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
      <div className="flex gap-[15px]">
        {tecnologies.map((tecnologie, index) => (
          <div key={index}>
            {tecnologie},{tecnologies.length}
          </div>
        ))}
      </div>
    </div>
  )
}
