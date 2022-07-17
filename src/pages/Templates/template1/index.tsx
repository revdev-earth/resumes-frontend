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

// form
import { useForm } from "react-hook-form"

export const Template1 = () => {
  const { resumes: data } = useSelector((s) => s)

  const { control } = useForm({
    defaultValues: {
      prueba: "",
      profecion: data.profecion,
    },
    mode: "onChange",
  })

  return (
    <LayoutPages>
      <Template1Container>
        <TopSection>
          <h3>{data.name}</h3>
          <Editable
            type="text"
            titleBold
            txt={data.profecion}
            name="profecion"
            control={control}
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
