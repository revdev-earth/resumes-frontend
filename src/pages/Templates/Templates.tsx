import Link from "next/link"

import Image from "next/image"

import { LoaderToken } from "@components/principal/LoaderToken"

import { LayoutPages } from "@components"
import { usePutResumeMutation } from "@redux/api/endpoints"

const templates = [
  {
    id: 1,
    name: "template1",
    src: "/screeanshot/template1.png",
    alt: "alt",
    height: 200,
    width: 120,
  },
  {
    id: 2,
    name: "template2",
    src: "/screeanshot/template1.png",
    alt: "alt",
    height: 200,
    width: 120,
  },
  {
    id: 3,
    name: "template3",
    src: "/screeanshot/template1.png",
    alt: "alt",
    height: 200,
    width: 120,
  },
]

export const Templates = () => {
  const [put_resume] = usePutResumeMutation()

  const handleClickTemplate = (template_name: string) => {
    put_resume({
      template: template_name,
    })
  }

  return (
    <LoaderToken>
      <LayoutPages>
        <div
          className="
          flex flex-col p-[50px]
          gap-[30px] justy"
        >
          <h2 className="font-bold text-3xl">Templates</h2>
          <div className="flex flex-wrap justify-center gap-[30px]">
            {templates.map(({ id, name, src, alt, height, width }) => (
              <Link key={id} href="/" className="">
                <div
                  key={id}
                  className="
                  w-[150px] h-[225px] rounded-md
                  shadow-button-primary cursor-pointer
                  p-4 bg-p-w-1 "
                  onClick={() => handleClickTemplate(name)}
                >
                  <Image
                    src={src}
                    alt={alt}
                    key={id}
                    height={height}
                    width={width}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </LayoutPages>
    </LoaderToken>
  )
}
