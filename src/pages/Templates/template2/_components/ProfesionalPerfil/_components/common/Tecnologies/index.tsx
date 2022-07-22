export const Tecnologies = ({ tecnologies }) => {
  return (
    <div className="flex flex-col gap-[5px]">
      <div className="font-bold">Tecnologies: </div>
      <div className="flex gap-x-[5px] flex-wrap">
        {tecnologies.map((tecnologie, index) => (
          <div key={index}>
            {tecnologie}
            {tecnologies.length + 1 !== index ? "," : "."}
          </div>
        ))}
      </div>
    </div>
  )
}
