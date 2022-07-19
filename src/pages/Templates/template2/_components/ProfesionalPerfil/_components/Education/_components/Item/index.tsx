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
      <div>
        {tecnologies.map((tecnologie, index) => (
          <div key={index}>{tecnologie}</div>
        ))}
      </div>
    </div>
  )
}
