export const Item = ({
  link: { icon, name, path },
  summary,
  tecnologies,
}: any) => {
  return (
    <div>
      {/* company */}
      <a href={path}>
        <div>{icon}</div> <div>{name}</div>
      </a>
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
