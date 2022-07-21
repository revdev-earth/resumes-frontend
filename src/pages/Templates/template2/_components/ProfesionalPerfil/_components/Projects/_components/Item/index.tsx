import { Tecnologies } from "../../../common"

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
      <Tecnologies {...{ tecnologies }} />
    </div>
  )
}
