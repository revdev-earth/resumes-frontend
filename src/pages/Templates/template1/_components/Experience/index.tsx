import { Editable } from "@components"
import { Title } from "../../styles"
import { ExperienceContainer, ItemExperienceContanier } from "./styles"

const ItemExperience = ({ enterpriseName, date, description, tecnologies }) => {
  // TODO: use tecnologies
  console.log(tecnologies)

  return (
    <ItemExperienceContanier>
      <Editable stylesText="text-[24px] font-medium" value={enterpriseName} />
      <Editable stylesText="text-[24px] font-medium" value={date} />
      <Editable stylesText="text-[24px] font-medium" value={description} />
      <Editable stylesText="text-[24px] font-medium" value={description} />
    </ItemExperienceContanier>
  )
}

const Experience = ({ experience }) => {
  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      <ul>
        {experience.map(
          ({ enterpriseName, date, description, tecnologies }) => {
            return (
              <ItemExperience
                enterpriseName={enterpriseName}
                date={date}
                description={description}
                tecnologies={tecnologies}
                key={Math.random() * 10}
              />
            )
          }
        )}
      </ul>
    </ExperienceContainer>
  )
}

export default Experience
