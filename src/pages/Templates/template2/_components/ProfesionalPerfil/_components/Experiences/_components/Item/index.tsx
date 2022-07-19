export const Item = ({
  company,
  title,
  date: { start, end },
  summary,
  tecnologies,
}: any) => {
  return (
    <div>
      {/* company */}
      <div>{company}</div>
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
