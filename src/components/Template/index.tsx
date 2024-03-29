import { LayoutPages } from "@components/principal"
import { BussinesCard } from "@redux/api/endpoints/user"
import { Resume } from "tree"
import { BussinessCard, ProfesionalPerfil } from "./_components"

export const Template = ({
  business_card,
  resume,
}: {
  business_card: BussinesCard
  resume: Resume
}) => (
  <LayoutPages>
    <div
      className="
          min-h-[500px]
          w-full md:w-[800px]
          m-auto mt-[50px]
          rounded
          bg-slate-50
          shadow-template-2-resume
        "
    >
      <div>
        <BussinessCard {...business_card} />
        <ProfesionalPerfil {...{ resume }} />
      </div>
    </div>
  </LayoutPages>
)
