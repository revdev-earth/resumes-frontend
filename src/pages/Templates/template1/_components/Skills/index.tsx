import { Editable } from "@components"
import { Title } from "../."

const ItemSkill = ({ name, years }) => {
  return (
    <div
      key={Math.random() * 10}
      className="flex pl-2 justify-between border-solid border-0 border-b-[1px] border-[#6BDFDC]"
    >
      <Editable
        name="skills"
        stylesText="text-[15px] leading-6 w-[80%]"
        value={name}
      />
      <Editable
        name="skills"
        stylesText="text-[15px] leading-6"
        value={years}
      />
    </div>
  )
}

const Skills = ({ skills }) => {
  return (
    <div>
      <Title>Skills</Title>
      <ul className="flex flex-col gap-3">
        {skills.map(({ name, years }) => (
          <ItemSkill key={Math.random() * 10} name={name} years={years} />
        ))}
      </ul>
    </div>
  )
}

export default Skills
