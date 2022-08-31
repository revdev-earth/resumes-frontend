import { Editable } from "@components"
import { Title } from "../."

const ItemEducation = ({ company, profesion, date, summary, tecnologies }) => {
  return (
    <li
      className=" flex flex-col gap-[10px] mb-2 pb-5 max-w-[425px] border-solid border-0 border-b-[1px] border-[#6BDFDC]"
      key={Math.random() * 10}
    >
      <Editable
        name="education"
        stylesText="text-[24px] font-semibold"
        value={company}
      />

      <div className="flex justify-between pr-10px">
        <Editable
          name="education"
          stylesText="text-[18px] leading-6"
          value={profesion}
        />
        <div className="flex">
          <Editable
            name="education"
            stylesText="text-[16px] font-light mr-2"
            value={date.start}
          />
          <p>-</p>
          <Editable
            name="education"
            stylesText="text-[16px] font-light mx-2"
            value={date.end}
          />
        </div>
      </div>
      <Editable
        name="education"
        stylesText="text-[15px] leading-6"
        value={summary}
      />
      <Editable
        name="education"
        stylesText="text-[15px] leading-6"
        value={tecnologies}
      />
    </li>
  )
}

const Education = ({ education }) => {
  return (
    <div>
      <Title>Education</Title>
      <ul>
        {education.map(({ company, profesion, date, summary, tecnologies }) => {
          return (
            <ItemEducation
              key={Math.random() * 10}
              company={company}
              profesion={profesion}
              date={date}
              summary={summary}
              tecnologies={tecnologies}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Education
