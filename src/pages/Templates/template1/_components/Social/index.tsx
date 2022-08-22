import { Title } from "../."
import ImgLinkedin from "@public/assets/linkedin.svg"
import ImgGithub from "@public/assets/github.svg"

const Social = ({ social }) => {
  return (
    <div>
      <Title>Social</Title>
      <div className="flex justify-center gap-5 bg-red">
        <a href={social[0].path} key={Math.random() * 10}>
          <ImgLinkedin alt="links img" layout="fill" className="w-10" />
        </a>
        <a href={social[1].path} key={Math.random() * 10}>
          <ImgGithub alt="links img" layout="fill" className="w-10" />
        </a>
      </div>
    </div>
  )
}

export default Social
