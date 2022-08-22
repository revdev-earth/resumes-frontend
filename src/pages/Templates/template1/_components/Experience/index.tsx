import { Editable } from "@components"
import { Title } from "../."

const ItemExperience = ({ company, date, summary, tecnologies }) => {
  // TODO: use tecnologies

  return (
    <li className=" flex flex-col pr-2 gap-[10px] mb-2 pb-5 border-solid border-0 border-b-[1px] border-[#6BDFDC]">
      <div className="flex justify-between">
        <Editable stylesText="text-[24px] font-semibold" value={company} />
        <div className="flex">
          <Editable
            stylesText="text-[16px] font-light mr-2"
            value={date.start}
          />
          <p>-</p>
          <Editable stylesText="text-[16px] font-light mx-2" value={date.end} />
        </div>
      </div>
      <Editable stylesText="text-[18px] leading-6" value={summary} />
      <Editable
        stylesText="text-[15px] leading-6"
        value={tecnologies.join(", ").toString()}
      />
    </li>
  )
}

const Experience = ({ experience }) => {
  return (
    <div className="my-[40px]">
      <Title>Experience</Title>
      <ul>
        {experience.map(({ company, date, summary, tecnologies }) => {
          return (
            <ItemExperience
              company={company}
              date={date}
              summary={summary}
              tecnologies={tecnologies}
              key={Math.random() * 10}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Experience
