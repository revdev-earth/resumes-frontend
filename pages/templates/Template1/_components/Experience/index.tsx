import InputTxt from "@components/InputTxt"
import { Title } from "../../styles"
import { ExperienceContainer, ItemExperience } from "./styles"
import TextoEditable from "@components/TextoEditable"

const Experience = ({ experience }) => {
  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      <ul>
        {experience.map(({ enterpriseName, date, description }) => {
          return (
            <ItemExperience key={Math.random() * 10}>
              <InputTxt type="text" title txt={enterpriseName} />
              <InputTxt type="date" txt={date} />
              <TextoEditable txt={description} />
            </ItemExperience>
          )
        })}
      </ul>
    </ExperienceContainer>
  )
}

export default Experience
