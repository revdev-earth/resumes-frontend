import { Editable } from "@components/common"
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
        stylesText="text-[25px] font-bold"
        name={`business_card.name`}
        value={name}
      />
      <Editable
        stylesText="text-[20px]"
        name={`business_card.profesion`}
        value={profesion}
      />
    </div>
    <div className="flex flex-col justify-between gap-[10px] items-end">
      <Editable name={`business_card.email`} value={email} />
      <div className="flex gap-1">
        <Editable name={`business_card.areaCode`} value={areaCode} />
        <Editable name={`business_card.phone`} value={phone} />
      </div>
    </div>
  </header>
)
