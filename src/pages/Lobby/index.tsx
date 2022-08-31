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
      <div className="p-10 md:p-12">
        <div className="font-bold text-3xl">Lobby</div>
        <div className="flex gap-6 md:gap-[50px] mt-7">
          {/* TODO: add actual resume template */}
          <Link href="/">
            <div
              className=" 
              w-1/2 h-[200px]
              md:w-[200px] md:h-[300px] 
              bg-[#CAF0F8]
              cursor-pointer rounded-lg p-5 
              border-4 border-nuestro-azul
              pt-4"
            >
              Resumen actual {resume?.template}
            </div>
          </Link>
          {/* selection templates link page */}
          <Link href="/templates">
            <div
              className="
                  w-1/2 h-[200px]
                  md:w-[200px] md:h-[300px] 
                  border-4 border-nuestro-azul
                  p-5 pt-4
                  bg-[#CAF0F8]
                  cursor-pointer rounded-lg 
                "
            >
              Templates
            </div>
          </Link>
        </div>
      </div>
    </LayoutPages>
  )
}
