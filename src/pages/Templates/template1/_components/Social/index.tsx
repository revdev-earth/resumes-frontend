import { Title } from "../../styles"
import { SocialContainer } from "./styles"
import ImgLinkedin from "@public/assets/linkedin.svg"
import ImgGithub from "@public/assets/github.svg"

const Social = ({ social }) => {
  return (
    <SocialContainer>
      <Title>Social</Title>
      <div>
        <a href={social[0].link} key={Math.random() * 10}>
          <ImgLinkedin alt="links img" layout="fill" />
        </a>
        <a href={social[1].link} key={Math.random() * 10}>
          <ImgGithub alt="links img" layout="fill" />
        </a>
      </div>
    </SocialContainer>
  )
}

export default Social
