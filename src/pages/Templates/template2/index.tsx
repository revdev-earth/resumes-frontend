import { LayoutPages } from "@components/principal"
import { BussinessCard, ProfesionalPerfil, bussinessCard } from "./_components"

export const Template2 = () => {
  return (
    <LayoutPages>
      <div
        className="
          min-h-[500px]
          lg:w-[800px]
          md:w-[600px]
          m-auto mt-[50px]
          rounded
          bg-slate-50
          shadow-template-2-resume
        "
      >
        <div>
          <BussinessCard {...bussinessCard} />
          <ProfesionalPerfil />
        </div>
      </div>
    </LayoutPages>
  )
}
