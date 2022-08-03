import { useState } from "react"
import { Form, Container } from "./styles"
import Link from "next/link"
import { LayoutPages } from "@components"
import InputGroup from "@components/InputGroup"
import Button from "@components/Button"
import { Label } from "@components/InputGroup/Label"
import { Input } from "@components/InputGroup/Input"

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
              <Label htmlFor="email" title="Your Email" />
              <Input
                type="text"
                nameInput="email"
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="last" title="Password" />
              <div className="absolute right-0">
                <Link href={"/forgot_password"}>Forgot password?</Link>
              </div>
              <Input
                nameInput="password"
                required
                onChange={handleInputChange}
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
