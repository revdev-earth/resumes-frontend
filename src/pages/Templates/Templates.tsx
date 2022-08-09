import Link from "next/link"

import { LayoutPages } from "@components"
// import plusCircle from "@public/circle-plus-solid.svg"
import Image from "next/image"
import { useResumesWithUserIdQuery } from "@redux/api/endpoints"
import { useEffect } from "react"

// 20 templates
const templates = [
  /*   {
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
  }, */
  {
    skill: "add",
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
          {templates.map(
            ({ path, skill }: { path?: string; skill: string }) => {
              if (skill)
                return (
                  <div
                    className="
                      flex justify-center align-center
                      w-[250px] h-[400px] rounded-xl
                      bg-gradient-to-r from-emerald-300 to-p-w-1 
                      cursor-pointer"
                  >
                    <Image
                      alt="image"
                      src="/assets/circle-plus-solid.svg"
                      className=""
                      height={80}
                      width={80}
                    />
                  </div>
                )

              return (
                <Link key={path} href={`templates/${path}`}>
                  <div
                    className="
                w-[250px] h-[400px] rounded-xl
                bg-emerald-300 cursor-pointer"
                  />
                </Link>
              )
            }
          )}
        </div>
      </div>
    </LayoutPages>
  )
}
