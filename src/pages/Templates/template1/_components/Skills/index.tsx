import { Editable } from "@components"
import { Title } from "../."

const ItemSkill = ({ title, years }) => {
  return (
    <div
      key={Math.random() * 10}
      className="flex pl-2 justify-between border-solid border-0 border-b-[1px] border-[#6BDFDC]"
    >
      <Editable stylesText="text-[15px] leading-6" value={title} />
      <Editable stylesText="text-[15px] leading-6" value={years} />
    </div>
  )
}

const Skills = ({ skills }) => {
  return (
    <div>
      <Title>Skills</Title>
      <ul>
        {skills.map(({ title, years }) => (
          <ItemSkill key={Math.random() * 10} title={title} years={years} />
        ))}
      </ul>
    </div>
  )
}

export default Skills
