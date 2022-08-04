import { Title } from "../../styles"
import { WhoIamcontainer } from "./styles"
import TextoEditable from "@components/common/TextoEditable"

import { useForm } from "react-hook-form"

const WhoIAm = ({ whoiam }) => {
  const { control } = useForm({
    defaultValues: {
      whoiam: whoiam,
    },
    mode: "onChange",
  })

  return (
    <WhoIamcontainer>
      <Title>Who am i</Title>
      <TextoEditable control={control} name="whoiam" />
    </WhoIamcontainer>
  )
}

export default WhoIAm
