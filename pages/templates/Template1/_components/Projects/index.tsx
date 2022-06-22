import { ItemProject, ProjectsContainer } from "./styles"
import { Title } from "../../styles"
import LinkTitle from "@components/LinkTitle"
import TextoEditable from "@components/TextoEditable"

const Projects = ({ projects }) => {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <div>
        {projects.map(({ title, description }) => (
          <ItemProject key={Math.random() * 10}>
            <LinkTitle>{title}</LinkTitle>
            <TextoEditable txt={description} />
          </ItemProject>
        ))}
      </div>
    </ProjectsContainer>
  )
}

export default Projects
