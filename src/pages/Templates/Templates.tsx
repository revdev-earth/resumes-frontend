import { useEffect } from "react"
import Link from "next/link"

import { LayoutPages } from "@components"
import { useResumeQuery } from "@redux/api/endpoints"

import { AddTemplate } from "./_components"
import { useNotToken } from "@hooks/useNotToken"

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
  useNotToken()

  const { isSuccess } = useResumeQuery({})

  useEffect(() => {
    console.log("resumes sucess ", isSuccess)
  }, [isSuccess])

  return (
    <LayoutPages>
      <div className="flex flex-col  p-[50px] gap-[30px] justy">
        <h2 className="font-bold text-3xl">Resumes</h2>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {resumes.map(({ path, skill }: { path?: string; skill: string }) => {
            if (skill) return <AddTemplate key={Math.random() * 100} />

            return (
              <Link key={Math.random() * 100} href={`templates/${path}`}>
                <div
                  className="
                  w-[200px] h-[300px] rounded-xl
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
