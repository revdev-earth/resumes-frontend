import { Title } from "../."
import { Editable, LinkTitle } from "@components"

const ItemProject = ({ tecnologies, summary, link }) => {
  return (
    <li
      className=" flex flex-col gap-[5px] mb-2 pb-5 max-w-[425px] border-solid border-0 border-b-[1px] border-[#6BDFDC] "
      key={Math.random() * 10}
    >
      <LinkTitle title={link.name} link={link.path} />
      <Editable
        name="projects"
        stylesText="text-[18px] leading-6"
        value={summary}
      />
      <div className="flex">
        <Editable
          name="projects"
          key={Math.random()}
          stylesText="text-[18px] leading-6"
          value={tecnologies.join(", ").toString()}
        />
      </div>
    </li>
  )
}

const Projects = ({ projects }) => {
  return (
    <div className="mb-3">
      <Title>Projects</Title>
      <div>
        {projects.map(({ tecnologies, summary, link }) => (
          <ItemProject
            key={Math.random() * 10}
            summary={summary}
            tecnologies={tecnologies}
            link={link}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
