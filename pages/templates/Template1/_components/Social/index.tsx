import { Title } from "../../styles"

const Social = ({ social }) => {
  return (
    <div>
      <Title>Social</Title>
      {social.map(({ title, link }) => {
        ;<a href={link} key={Math.random() * 10}>
          <img src="/assets/link.svg" alt="" />
        </a>
      })}
      <img src="" alt="" />
    </div>
  )
}

export default Social
