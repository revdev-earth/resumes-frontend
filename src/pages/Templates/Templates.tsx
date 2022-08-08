import Link from "next/link"

import { LayoutPages } from "@components"
import { useResumesWithUserIdQuery } from "@redux/api/actions"
import { useEffect } from "react"

// 20 templates
const templates = [
  {
    path: "template1",
  },
  {
    path: "template2",
  },
  {
    // path: "template1",
  },
  {
    // path: "template2",
  },
]

export const Templates = () => {
  console.log("templates : ", templates.length)

  const { isSuccess } = useResumesWithUserIdQuery({})

  useEffect(() => {
    console.log("resumes sucess ", isSuccess)
  }, [isSuccess])

  return (
    <LayoutPages>
      <div className="flex flex-col text-center p-[50px] gap-[30px] justy">
        <h2>Templates</h2>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {templates.map(({ path }) => (
            <Link key={path} href={`templates/${path}`}>
              <div
                className="
                w-[250px] h-[400px] rounded-xl
                bg-emerald-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </LayoutPages>
  )
}
