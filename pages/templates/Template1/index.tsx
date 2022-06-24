import { Template1Container, TopSection, BottomSection } from "./styles"
import LayoutPages from "@components/LayoutPages"
import InputTxt from "@components/InputTxt"

import WhoIAm from "./_components/Who"
import Experience from "./_components/Experience"
import Projects from "./_components/Projects"
import Social from "./_components/Social"
import Education from "./_components/Education"
import Skills from "./_components/Skills"

import { useSelector } from "@redux"

const Template1 = () => {
  const { resumes: data } = useSelector((s) => s)
  return (
    <LayoutPages>
      <Template1Container>
        <TopSection>
          <h3>{data.name}</h3>
          <InputTxt type="text" titleBold txt={data.profecion} />
        </TopSection>
        <BottomSection>
          <div>
            <WhoIAm resume={data.resume} />
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

export default Template1
