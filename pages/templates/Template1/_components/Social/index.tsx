import { Title } from "../../styles"
import Image from "next/image"

const Social = ({ social }) => {
  return (
    <div>
      <Title>Social</Title>
      {social.map(({ link }) => {
        ;<a href={link} key={Math.random() * 10}>
          <Image src="/assets/link.svg" alt="" layout="fill" />
        </a>
      })}
      <Image src="" alt="" layout="fill" />
    </div>
  )
}

export default Social
