import { LinkUserContainer, Content } from "./styles"
import Button from "../Button"
import { useState } from "react"
import ImgUser from "@public/assets/user.svg"
import ImgLinkedin from "@public/assets/linkedin.svg"
import ImgGithub from "@public/assets/github.svg"

const LinksUser = () => {
  const [all, setAll] = useState(false)

  return (
    <LinkUserContainer all={all}>
      {/* <Images src="/assets/user.svg" alt="Img user" /> */}
      <ImgUser />
      <Content all={all}>
        <h4>Nombre</h4>
        <ul>
          <li>
            <a>
              {/*  <Images src="/assets/linkedin.svg" /> */}
              <ImgLinkedin />
            </a>
          </li>
          <li>
            <a>
              {/* <Images src="/assets/github.svg" /> */}
              <ImgGithub />
            </a>
          </li>
        </ul>
        <Button primary>resume</Button>
      </Content>
      <div onClick={() => setAll(!all)}></div>
    </LinkUserContainer>
  )
}

export default LinksUser
