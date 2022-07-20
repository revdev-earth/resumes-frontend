export * from "./_components/data"

export const BussinessCard = ({
  name,
  profesion,
  email,
  phone: { area, number },
}) => (
  <header
    className="
            p-[50px]"
  >
    <div>{name}</div>
    <div>{profesion}</div>
    <div>{email}</div>
    <div>
      {area} {number}
    </div>
  </header>
)
