import { Editable } from "@components/common"
import { Title } from "../common"

export const About = ({ about }: { about: string }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      {/* Title */}
      <Title>About:</Title>

      {/* Content */}
      <div>
        <Editable stylesText="flex-col" name="about" value={about} />
      </div>
    </div>
  )
}
