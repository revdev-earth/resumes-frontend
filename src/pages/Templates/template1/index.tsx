// import { LayoutPages } from "@components"
// import { Editable } from "@components"

import { useResumeQuery } from "@redux/api/endpoints"

// import WhoIAm from "./_components/Who"
// import Experience from "./_components/Experience"
// import Projects from "./_components/Projects"
// import Social from "./_components/Social"
// import Education from "./_components/Education"
// import Skills from "./_components/Skills"

// import { useSelector } from "@redux"

export const Template1 = () => {
  const { data: resume, isSuccess } = useResumeQuery({})
  console.log("resume \n ", resume, isSuccess)
  return <>Resume </>
  // const { resumes: data } = useSelector((s) => s.app)
  // return (
  //   <LayoutPages>
  //     <div
  //       className="
  //       box-border overflow-hidden flex
  //       flex-col mx-auto my-0
  //       w-[795px] shadow-button-primary
  //       "
  //     >
  //       <div className="p-[30px] w-[100%] h-[150px] bg-p-green ">
  //         <Editable stylesText="text-[36px] font-semibold" value={data.name} />
  //         <Editable
  //           stylesText="text-[24px] font-semibold"
  //           value={data.profecion}
  //         />
  //       </div>
  //       <div className="grid grid-cols-[450px_250px] p-[30px] w-[100%]">
  //         <div>
  //           <WhoIAm whoiam={data.whoiam} />
  //           <Experience experience={data.experience} />
  //           <Education education={data.education} />
  //         </div>
  //         <div>
  //           <Projects projects={data.projects} />
  //           <Skills skills={data.skills} />
  //           <Social social={data.social} />
  //         </div>
  //       </div>
  //     </div>
  //   </LayoutPages>
  // )
}
