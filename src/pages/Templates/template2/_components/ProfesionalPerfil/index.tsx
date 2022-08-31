import { Resume } from "tree"
import {
  Education,
  Experiences,
  MyStory,
  Projects,
  Skills,
  Social,
} from "./_components"

export const ProfesionalPerfil = ({ resume }: { resume: Resume }) => {
  const { about, experiences, education, projects, skills, social } = resume

  return (
    <main className="flex flex-col md:flex-row gap-[20px] p-6 pr-9 text-[16px] leading-6">
      <section className="flex flex-col gap-[50px] w-full md:w-7/12">
        {/* MyStory */}
        <MyStory {...{ about }} />

        {/* Experiences */}
        <Experiences {...{ experiences }} />

        {/* Education */}
        <Education {...{ education }} />
      </section>
      <aside className="flex flex-col gap-[50px] w-full md:w-5/12">
        {/* projects */}
        <Projects {...{ projects }} />

        {/* skills */}
        <Skills {...{ skills }} />

        {/* social */}
        <Social {...{ social }} />
      </aside>
    </main>
  )
}
