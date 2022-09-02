import { Editable } from "@components/editables/Editable"

import { BusinessCard } from "tree"

export * from "./_components/data"

export const BussinessCard = ({
  name,
  profesion,
  email,
  areaCode,
  phone,
}: BusinessCard) => (
  <header
    className="
    flex justify-between
    bg-emerald-200 
      p-[25px]"
  >
    <div className="flex flex-col gap-[10px]">
      <Editable
        type_editable="bussiness_card"
        stylesText="text-[25px] font-bold"
        name={`name`}
        value={name}
      />
      <Editable
        type_editable="bussiness_card"
        stylesText="text-[20px]"
        name={`profesion`}
        value={profesion}
      />
    </div>
    <div className="flex flex-col justify-between gap-[10px] items-end">
      <Editable type_editable="bussiness_card" name={`email`} value={email} />
      <div className="flex gap-1">
        <Editable
          type_editable="bussiness_card"
          name={`areaCode`}
          value={areaCode}
        />
        <Editable type_editable="bussiness_card" name={`phone`} value={phone} />
      </div>
    </div>
  </header>
)
