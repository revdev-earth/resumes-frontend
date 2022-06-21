import InputTxt from "@components/InputTxt"
import { Title } from "../../styles"
import { ItemEducation } from "./styles"
import TextoEditable from "@components/TextoEditable"

const Education = ({ education }) => {
  return (
    <div>
      <Title>Education</Title>
      <ul>
        {education.map(({ instituteName, courseName, date, description }) => {
          return (
            <ItemEducation key={Math.random() * 10}>
              <InputTxt type="text" title txt={instituteName} />
              <div>
                <InputTxt type="text" text txt={courseName} />
                <InputTxt type="date" txt={date} />
              </div>
              <TextoEditable txt={description} />
            </ItemEducation>
          )
        })}
      </ul>
    </div>
  )
}

export default Education
