import { HeaderContainer } from "./styles"
import Link from "next/link"

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <h1
          style={{
            padding: "20px 20px 20px 0px",
          }}
        >
          Resumes
        </h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/login">Log In</Link>
          </li>
          <li>
            <Link href="/create_account">Register</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

export default Header
