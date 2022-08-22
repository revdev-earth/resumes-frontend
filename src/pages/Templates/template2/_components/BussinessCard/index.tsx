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
      <div className="text-[25px] font-bold">{name}</div>
      <div className="text-[20px]">{profesion}</div>
    </div>
    <div className="flex flex-col justify-between gap-[10px]">
      <div>{email}</div>
      <div>
        {areaCode} {phone}
      </div>
    </div>
  </header>
)
