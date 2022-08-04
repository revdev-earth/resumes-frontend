import { Template1Container, TopSection, BottomSection } from "./styles"
import { LayoutPages } from "@components"
import { Editable } from "@components"

import WhoIAm from "./_components/Who"
import Experience from "./_components/Experience"
import Projects from "./_components/Projects"
import Social from "./_components/Social"
import Education from "./_components/Education"
import Skills from "./_components/Skills"

import { useSelector } from "@redux"

export const Template1 = () => {
  const { resumes: data } = useSelector((s) => s.app)

  return (
    <LayoutPages>
      <Template1Container>
        <TopSection>
          <Editable stylesText="text-[36px] font-semibold" value={data.name} />
          <Editable
            stylesText="text-[24px] font-semibold"
            value={data.profecion}
          />
        </TopSection>
        <BottomSection>
          <div>
            <WhoIAm whoiam={data.whoiam} />
            <Experience experience={data.experience} />
            <Education education={data.education} />
          </div>
          <div>
            <Projects projects={data.projects} />
            <Skills skills={data.skills} />
            <Social social={data.social} />
          </div>
        </BottomSection>
      </Template1Container>
    </LayoutPages>
  )
}
