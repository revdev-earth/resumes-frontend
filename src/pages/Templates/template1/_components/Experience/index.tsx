import { Editable } from "@components"
import { Title } from "../../styles"
import { ExperienceContainer, ItemExperienceContanier } from "./styles"

const ItemExperience = ({ enterpriseName, date, description, tecnologies }) => {
  // TODO: use tecnologies
  console.log(tecnologies)

  return (
    <ItemExperienceContanier className=" flex gap-[10px] mb-2 pb-5">
      <div className="flex justify-between">
        <Editable
          stylesText="text-[24px] font-semibold"
          value={enterpriseName}
        />
        <Editable stylesText="text-[16px] font-light mr-2" value={date} />
      </div>
      <Editable stylesText="text-[18px] leading-6" value={description} />
      <Editable
        stylesText="text-[15px] leading-6"
        value={tecnologies.toString()}
      />
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
