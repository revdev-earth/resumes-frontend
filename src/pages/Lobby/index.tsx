import { LayoutPages } from "@components/principal"

import Link from "next/link"

import { useNotToken } from "@hooks/useNotToken"
import { useGetResumeQuery } from "@redux/api/endpoints"

export const Lobby = () => {
  useNotToken()

  const { data: resume } = useGetResumeQuery({})

  return (
    <LayoutPages>
      <div className="p-12">
        <div className="font-bold text-3xl">Lobby</div>
        <div className="flex gap-[50px] mt-7">
          {/* TODO: add actual resume template */}
          <Link href="/">
            <div
              className=" 
              p- w-[200px] h-[300px] bg-emerald-300 
              cursor-pointer rounded-lg p-5 
              pt-4"
            >
              Resumen actual {resume?.template}
            </div>
          </Link>
          {/* selection templates link page */}
          <Link href="/templates">
            <div
              className="
                  p-5 pt-4 w-[300px] 
                  h-[300px] bg-emerald-300 cursor-pointer 
                  rounded-lg "
            >
              Templates
            </div>
          </Link>
        </div>
      </div>
    </LayoutPages>
  )
}
