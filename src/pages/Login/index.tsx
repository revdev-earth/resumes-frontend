import { useState } from "react"
import { Form, Container, Message } from "./styles"
import Link from "next/link"
import { LayoutPages } from "@components"
import InputGroup from "@components/InputGroup"
import Button from "@components/Button"
import { Label } from "@components/InputGroup/Label"

export const Login = () => {
  const [formLogIn, setFormLogIn] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(`Email: ${formLogIn.email}, password: ${formLogIn.password}`)
  }

  const handleInputChange = (event) => {
    setFormLogIn({
      ...formLogIn,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <LayoutPages>
      <div className="m-auto">
        <Container>
          <h2>Log In</h2>

          <Form onSubmit={handleSubmit} method="post">
            <InputGroup>
              <Label forlabel="first" title="Your Email" />
              <input
                type="text"
                id="first"
                onChange={handleInputChange}
                required
                name="email"
              />
            </InputGroup>

            <InputGroup>
              <Label forlabel="last" title="Password" />
              <Message>
                <Link href={"/forgot_password"}>Forgot password?</Link>
              </Message>
              <input
                type="password"
                id="last"
                required
                onChange={handleInputChange}
                name="password"
              />
            </InputGroup>

            <Button primary type="submit">
              Log in
            </Button>
          </Form>
          <Link href="/create_account">
            <a>Or create account.</a>
          </Link>
        </Container>
      </div>
    </LayoutPages>
  )
}
