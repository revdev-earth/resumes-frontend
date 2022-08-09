import { useEffect } from "react"
import Link from "next/link"

import { LayoutPages } from "@components"
import { useResumesWithUserIdQuery } from "@redux/api/endpoints"

import { AddTemplate } from "./_components"

// resumes
const resumes = [
  /*   {
    path: "template",
  },  */
  {
    skill: "add",
  },
]

export const Templates = () => {
  const { isSuccess } = useResumesWithUserIdQuery({})

  useEffect(() => {
    console.log("resumes sucess ", isSuccess)
  }, [isSuccess])

  return (
    <LayoutPages>
      <div className="flex flex-col text-center p-[50px] gap-[30px] justy">
        <h2>Resumes</h2>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {resumes.map(({ path, skill }: { path?: string; skill: string }) => {
            if (skill) return <AddTemplate />

            return (
              <Link key={path} href={`templates/${path}`}>
                <div
                  className="
                w-[250px] h-[400px] rounded-xl
                bg-emerald-300 cursor-pointer"
                />
              </Link>
            )
          })}
        </div>
      </div>
    </LayoutPages>
  )
}
