import { Title } from "../."
import { Editable } from "@components"

const WhoIAm = ({ whoiam }) => {
  return (
    <div className="flex flex-col justify-beween pl-1 border-solid border-0 border-b-[1px] border-[#6BDFDC]">
      <Title>Who am i</Title>
      <Editable
        name="about"
        stylesText="text-[18px] leading-6"
        value={whoiam}
      />
    </div>
  )
}

export default WhoIAm
