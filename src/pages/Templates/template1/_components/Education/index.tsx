import { Editable } from "@components"
import { Title } from "../../styles"
import { ItemEducationContainer } from "./styles"
import TextoEditable from "@components/common/TextoEditable"

import { useForm } from "react-hook-form"

const ItemEducation = ({ instituteName, courseName, date, description }) => {
  const { control } = useForm({
    defaultValues: {
      instituteName: instituteName,
      courseName: courseName,
      date: date,
      description: description,
    },
  })

  return (
    <ItemEducationContainer key={Math.random() * 10}>
      <Editable
        type="text"
        titleBold
        name="instituteName"
        txt={instituteName}
        control={control}
      />

      <div>
        <Editable
          type="text"
          text
          txt={courseName}
          name="courseName"
          control={control}
        />
        <Editable type="date" txt={date} name="date" control={control} />
      </div>
      <TextoEditable txt={description} name="description" control={control} />
    </ItemEducationContainer>
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
