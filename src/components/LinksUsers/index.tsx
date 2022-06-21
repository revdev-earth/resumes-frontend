import { LinkUserContainer, Content } from "./styles"
import Button from "../Button"
import { useState } from "react"
// import Images from "next/image"

const LinksUser = () => {
  const [all, setAll] = useState(false)

  return (
    <LinkUserContainer all={all}>
      {/* <Images src="/assets/user.svg" alt="Img user" /> */}
      <Content all={all}>
        <h4>Nombre</h4>
        <ul>
          <li>
            <a>{/* <Images src="/assets/linkedin.svg" /> */}</a>
          </li>
          <li>
            <a>{/* <Images src="/assets/github.svg" /> */}</a>
          </li>
        </ul>
        <Button primary>resume</Button>
      </Content>
      <div onClick={() => setAll(!all)}>{/* <Images src="" alt="" /> */}</div>
    </LinkUserContainer>
  )
}

export default LinksUser
