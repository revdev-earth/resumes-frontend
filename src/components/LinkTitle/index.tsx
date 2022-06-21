import { LinkTitleContainer } from "./styles"
import InputTxt from "../InputTxt"
const LinkTitle = ({ children, title }) => {
  return (
    <LinkTitleContainer>
      <img src="/assets/link.svg" alt="" />
      <InputTxt type="text" text value={title} />
    </LinkTitleContainer>
  )
}

export default LinkTitle
