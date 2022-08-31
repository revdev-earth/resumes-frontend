import { EditableBussinessCard } from "@components/common/EditableBussinessCard"

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
      <EditableBussinessCard
        stylesText="text-[25px] font-bold"
        name={`name`}
        value={name}
      />
      <EditableBussinessCard
        stylesText="text-[20px]"
        name={`profesion`}
        value={profesion}
      />
    </div>
    <div className="flex flex-col justify-between gap-[10px] items-end">
      <EditableBussinessCard name={`email`} value={email} />
      <div className="flex gap-1">
        <EditableBussinessCard name={`areaCode`} value={areaCode} />
        <EditableBussinessCard name={`phone`} value={phone} />
      </div>
    </div>
  </header>
)
