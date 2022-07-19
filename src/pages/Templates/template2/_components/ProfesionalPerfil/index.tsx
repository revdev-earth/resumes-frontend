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
    <main>
      <section>
        {/* MyStory */}
        <MyStory />

        {/* Experiences */}
        <Education />

        {/* Education */}
        <Experiences />
      </section>
      <aside>
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
