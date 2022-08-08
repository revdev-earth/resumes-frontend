import { Title } from "../."
import { Editable, LinkTitle } from "@components"

const ItemProject = ({ title, description, link }) => {
  return (
    <li
      className=" flex flex-col gap-[5px] mb-2 pb-5 max-w-[425px] border-solid border-0 border-b-[1px] border-[#6BDFDC] "
      key={Math.random() * 10}
    >
      <LinkTitle title={title} link={link} />
      <Editable stylesText="text-[18px] leading-6" value={description} />
    </li>
  )
}

const Projects = ({ projects }) => {
  return (
    <div className="mb-3">
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
    </div>
  )
}

export default Projects
