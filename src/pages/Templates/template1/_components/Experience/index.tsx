import { Editable } from "@components"
import { Title } from "../../styles"

const ItemExperience = ({ enterpriseName, date, description, tecnologies }) => {
  // TODO: use tecnologies
  console.log(tecnologies)

  return (
    <li className=" flex flex-col pr-2 gap-[10px] mb-2 pb-5 border-solid border-0 border-b-[1px] border-[#6BDFDC]">
      <div className="flex justify-between">
        <Editable
          stylesText="text-[24px] font-semibold"
          value={enterpriseName}
        />
        <Editable stylesText="text-[16px] font-light mr-2" value={date} />
      </div>
      <Editable stylesText="text-[18px] leading-6" value={description} />
      <Editable
        stylesText="text-[15px] leading-6"
        value={tecnologies.toString()}
      />
    </li>
  )
}

const Experience = ({ experience }) => {
  return (
    <div className="my-[40px]">
      <Title>Experience</Title>
      <ul>
        {experience.map(
          ({ enterpriseName, date, description, tecnologies }) => {
            return (
              <ItemExperience
                enterpriseName={enterpriseName}
                date={date}
                description={description}
                tecnologies={tecnologies}
                key={Math.random() * 10}
              />
            )
          }
        )}
      </ul>
    </div>
  )
}

export default Experience
