export const Item = ({ name, years }: any) => {
  return (
    <div className="flex font-medium">
      {/* name */}
      <div className="w-[150px]">{name}</div>
      {/* years */}
      <div className="">{years} years</div>
    </div>
  )
}
