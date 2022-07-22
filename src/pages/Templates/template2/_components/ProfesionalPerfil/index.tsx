import {
  Education,
  Experiences,
  MyStory,
  Projects,
  Skills,
  Social,
} from "./_components"

export const ProfesionalPerfil = () => {
  return (
    <main className="flex gap-[20px] p-[25px] text-[16px] leading-6">
      <section className="flex flex-col gap-[50px] w-7/12">
        {/* MyStory */}
        <MyStory />

        {/* Experiences */}
        <Experiences />

        {/* Education */}
        <Education />
      </section>
      <aside className="flex flex-col gap-[50px] w-5/12">
        {/* projects */}
        <Projects />

        {/* skills */}
        <Skills />

        {/* social */}
        <Social />
      </aside>
    </main>
  )
}
