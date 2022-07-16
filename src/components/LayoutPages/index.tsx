import { Container } from "./styles"
import { Header } from "@components"

const LayoutPages = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  )
}

export default LayoutPages
