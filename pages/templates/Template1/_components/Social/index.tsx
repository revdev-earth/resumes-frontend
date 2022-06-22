import { Title } from "../../styles"
import LinkImage from "@public/assets/link.svg"

const Social = ({ social }) => {
  return (
    <div>
      <Title>Social</Title>
      {social.map(({ link }) => (
        <a href={link} key={Math.random() * 10}>
          <LinkImage alt="links img" layout="fill" />
        </a>
      ))}
    </div>
  )
}

export default Social
