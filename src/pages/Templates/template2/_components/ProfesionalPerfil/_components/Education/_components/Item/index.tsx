export const Item = ({
  institute,
  title,
  date: { start, end },
  summary,
  tecnologies,
}: any) => {
  return (
    <div>
      {/* institute */}
      <div>{institute}</div>
      {/* title */}
      <div>{title}</div>
      {/* date */}
      <div>
        {start} - {end}
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
