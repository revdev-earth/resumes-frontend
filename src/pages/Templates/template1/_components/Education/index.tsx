import { Editable } from "@components"
import { Title } from "../."

const ItemEducation = ({ instituteName, courseName, date, description }) => {
  return (
    <li
      className=" flex flex-col gap-[10px] mb-2 pb-5 max-w-[425px] border-solid border-0 border-b-[1px] border-[#6BDFDC]"
      key={Math.random() * 10}
    >
      <Editable stylesText="text-[24px] font-semibold" value={instituteName} />

      <div className="flex justify-between pr-10px">
        <Editable stylesText="text-[18px] leading-6" value={courseName} />
        <Editable stylesText="text-[16px] font-light mr-2" value={date} />
      </div>
      <Editable stylesText="text-[15px] leading-6" value={description} />
    </li>
  )
}

const Education = ({ education }) => {
  return (
    <div>
      <Title>Education</Title>
      <ul>
        {education.map(({ instituteName, courseName, date, description }) => {
          return (
            <ItemEducation
              key={Math.random() * 10}
              instituteName={instituteName}
              courseName={courseName}
              date={date}
              description={description}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Education
