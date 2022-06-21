import { Title } from "../../styles"
import Image from "next/image"

const Social = ({ social }) => {
  return (
    <div>
      <Title>Social</Title>
      {social.map(({ link }) => {
        ;<a href={link} key={Math.random() * 10}>
          <Image src="/assets/link.svg" alt="" />
        </a>
      })}
      <Image src="" alt="" />
    </div>
  )
}

export default Social
