import { ItemSkillContainer } from "./styles"
import { Editable } from "@components"
import { Title } from "../../styles"

import { useForm } from "react-hook-form"

const ItemSkill = ({ title, years }) => {
  const { control } = useForm({
    defaultValues: {
      title: title,
      years: years,
    },
  })
  return (
    <ItemSkillContainer key={Math.random() * 10}>
      <Editable type="text" txt={title} name="title" control={control} />
      <Editable
        type="number"
        number
        txt={years}
        name="years"
        control={control}
      />
    </ItemSkillContainer>
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
