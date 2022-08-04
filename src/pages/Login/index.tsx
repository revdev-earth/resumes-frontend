import { useState } from "react"
import Link from "next/link"

import { Form, Container } from "./styles"
import { LayoutPages, Button, Field } from "@components"

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
            <Field
              name="email"
              label="Email"
              type="email"
              onChange={handleInputChange}
              required
            />

            <div className="relative">
              <div className="absolute right-0">
                <Link href={"/forgot_password"}>Forgot password?</Link>
              </div>
              <Field
                name="password"
                label="Password"
                type="password"
                onChange={handleInputChange}
                required
              />
            </div>

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
