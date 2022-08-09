import Image from "next/image"
import { useState } from "react"

// templates
const templates = [
  { id: 1, name: "template1", styleBasic: "{}", stylesComplete: "{}" },
  { id: 2, name: "template1", styleBasic: "{}", stylesComplete: "{}" },
  { id: 3, name: "template1", styleBasic: "{}", stylesComplete: "{}" },
]

export const AddTemplate = () => {
  const [activate, setActivate] = useState(false)

  const handleAddModal = () => {
    setActivate(true)
  }

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
            {templates.map(({ id }) => (
              <div
                key={id}
                className="
                w-[150px] h-[275px] rounded-xl
                bg-emerald-300 cursor-pointer"
              />
            ))}
          </div>
        ) : (
          "desactive"
        )}
      </div>
    </>
  )
}
