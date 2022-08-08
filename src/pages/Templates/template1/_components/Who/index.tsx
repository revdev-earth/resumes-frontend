import { Title } from "../."
import { Editable } from "@components"

const WhoIAm = ({ whoiam }) => {
  return (
    <div className="flex flex-col justify-beween pl-1 ">
      <Title>Who am i</Title>
      <Editable stylesText="text-[18px] leading-6" value={whoiam} />
    </div>
  )
}

export default WhoIAm
