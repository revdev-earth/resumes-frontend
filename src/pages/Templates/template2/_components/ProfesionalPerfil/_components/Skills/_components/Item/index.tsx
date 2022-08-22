import { Skill_item } from "tree"

export const Item = ({ name, years }: Skill_item) => {
  return (
    <div className="flex font-medium">
      {/* name */}
      <div className="w-[150px]">{name}</div>
      {/* years */}
      <div className="">{years} years</div>
    </div>
  )
}
