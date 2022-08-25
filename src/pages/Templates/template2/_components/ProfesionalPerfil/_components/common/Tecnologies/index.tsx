import { Editable } from "@components/common"

export const Tecnologies = ({ tecnologies, last_index }) => (
  <div className="flex flex-col gap-[5px]">
    <div className="font-bold">Tecnologies: </div>
    <div className="flex gap-x-[5px] flex-wrap">
      {tecnologies.map((tecnologie: string, index: number) => (
        <div key={index}>
          <Editable
            name={`experiences.${last_index}.tecnologies.${index}`}
            value={tecnologie}
          />

          {tecnologies.length + 1 !== index ? "," : "."}
        </div>
      ))}
    </div>
  </div>
)
