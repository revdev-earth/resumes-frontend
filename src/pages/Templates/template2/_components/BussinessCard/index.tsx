export * from "./_components/data"

export const BussinessCard = ({
  name,
  profesion,
  email,
  phone: { area, number },
}) => (
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
        {area} {number}
      </div>
    </div>
  </header>
)
