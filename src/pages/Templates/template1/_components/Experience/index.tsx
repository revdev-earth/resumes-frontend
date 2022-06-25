import { Editable } from "@components"
import { Title } from "../../styles"
import { ExperienceContainer, ItemExperienceContanier } from "./styles"
import TextoEditable from "@components/TextoEditable"
import { useForm } from "react-hook-form"

const ItemExperience = ({ enterpriseName, date, description, tecnologies }) => {
  const { control } = useForm({
    defaultValues: {
      enterpriseName: enterpriseName,
      date: date,
      description: description,
      tecnologies: tecnologies,
    },
    mode: "onChange",
  })

  return (
    <ItemExperienceContanier>
      <Editable type="text" titleBold name="enterpriseName" control={control} />
      <Editable type="date" txt={date} name="date" control={control} />
      <TextoEditable txt={description} name="description" control={control} />
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
