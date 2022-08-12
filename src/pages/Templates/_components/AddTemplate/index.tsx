import { add_template } from "@redux/slices/templates"
import { useDispatch } from "@redux/store"
import Image from "next/image"
import { useState } from "react"

// templates
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

export const AddTemplate = () => {
  const dispatch = useDispatch()
  const [activate, setActivate] = useState(false)

  const handleAddModal = () => setActivate(true)

  const handleClickTemplate = (name: string) => dispatch(add_template(name))

  return (
    <>
      <div
        className="
          flex justify-center align-center
          w-[250px] h-[400px] rounded-xl
          bg-gradient-to-r from-emerald-300 to-p-w-1 
          cursor-pointer"
        onClick={handleAddModal}
      >
        <Image
          alt="image"
          src="/assets/circle-plus-solid.svg"
          className=""
          height={80}
          width={80}
        />
      </div>
      <div>
        {activate ? (
          <div className="flex gap-[20px] ">
            {templates.map(({ id, name, src, alt, height, width }) => (
              <div
                key={id}
                className="w-[150px] h-[225px] rounded-md shadow-button-primary cursor-pointer p-4"
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
            ))}
          </div>
        ) : (
          "desactive"
        )}
      </div>
    </>
  )
}
