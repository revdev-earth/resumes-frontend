import { LayoutPages } from "@components"
import { Editable } from "@components"

import { BussinesCard } from "@redux/api/endpoints/user"

import WhoIAm from "./_components/Who"
import Experience from "./_components/Experience"
import Projects from "./_components/Projects"
import Social from "./_components/Social"
import Education from "./_components/Education"
import Skills from "./_components/Skills"
import { Resume } from "tree"

export const Template1 = ({
  business_card,
  resume,
}: {
  business_card: BussinesCard
  resume: Resume
}) => {
  console.log("\n \n resume \n \n ", resume.social)
  return (
    <LayoutPages>
      <div
        className="
        box-border overflow-hidden flex
        flex-col mx-auto my-0
        w-[795px] shadow-button-primary
        "
      >
        <div className="p-[30px] w-[100%] h-[150px] bg-p-green ">
          <Editable
            stylesText="text-[36px] font-semibold"
            value={business_card.name}
          />
          <Editable
            stylesText="text-[24px] font-semibold"
            value={business_card.profesion}
          />
        </div>
        <div className="grid grid-cols-[450px_250px] p-[30px] w-[100%]">
          <div>
            <WhoIAm whoiam={resume.about} />
            <Experience experience={resume.experiences} />
            <Education education={resume.education} />
          </div>
          <div>
            <Projects projects={resume.projects} />
            <Skills skills={resume.skills} />
            <Social social={resume.social} />
          </div>
        </div>
      </div>
    </LayoutPages>
  )
}
