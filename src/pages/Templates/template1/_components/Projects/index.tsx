import { ItemProjectContainer, ProjectsContainer } from "./styles"
import { Title } from "../../styles"
import LinkTitle from "@components/common/LinkTitle"
import TextoEditable from "@components/common/TextoEditable"
import { useForm } from "react-hook-form"

const ItemProject = ({ title, description, link }) => {
  const { control } = useForm({
    defaultValues: {
      link: link,
      title: title,
      description: description,
    },
  })
  return (
    <ItemProjectContainer key={Math.random() * 10}>
      <LinkTitle title={title} link={link} />
      <TextoEditable txt={description} name="description" control={control} />
    </ItemProjectContainer>
  )
}

const Projects = ({ projects }) => {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <div>
        {projects.map(({ title, description, link }) => (
          <ItemProject
            key={Math.random() * 10}
            title={title}
            description={description}
            link={link}
          />
        ))}
      </div>
    </ProjectsContainer>
  )
}

export default Projects
