import { LayoutPages } from "@components/principal"

import Link from "next/link"

import { useGetResumeWithJwtQuery } from "@redux/api/endpoints"

import { LoaderToken } from "@components/principal/LoaderToken"

export const LobbyRoute = () => (
  <LoaderToken>
    <Lobby />
  </LoaderToken>
)

const Lobby = () => {
  const { data: resume } = useGetResumeWithJwtQuery({})

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
