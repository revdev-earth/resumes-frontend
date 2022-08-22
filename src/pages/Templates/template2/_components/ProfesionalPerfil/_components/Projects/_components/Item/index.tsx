import { Project_item } from "tree"
import { Tecnologies } from "../../../common"

export const Item = ({
  link: { icon, name, path },
  summary,
  tecnologies,
}: Project_item) => {
  return (
    <div className="flex flex-col gap-[15px]">
      {/* company */}
      <a className="font-bold" href={path}>
        <div>{icon}</div> <div>{name}</div>
      </a>
      {/* summary */}
      <div>{summary}</div>
      {/* tecnologies */}
      <Tecnologies {...{ tecnologies }} />
    </div>
  )
}
