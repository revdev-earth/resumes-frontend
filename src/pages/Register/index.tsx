import { useState } from "react"
import Link from "next/link"

import { Form, Container, CheckTerminos } from "./styles"
import { Button, Field, LayoutPages } from "@components"

export const Register = () => {
  const [formCA, setFormCA] = useState({
    user: "",
    email: "",
    password: "",
    policy: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formCA.policy === true) {
      console.log("Se ha creado un nuevo usuario:")
      console.table(formCA)
    }
  }

  const handleInputChange = (e) => {
    setFormCA({
      ...formCA,
      [e.target.name]: e.target.value,
    })
  }

  const handleCheckboxChange = (e) => {
    setFormCA({
      ...formCA,
      [e.target.name]: e.target.checked,
    })
  }

  return (
    <LayoutPages>
      <div className="m-auto">
        <Container>
          <h2>Create account</h2>

          <Form onSubmit={handleSubmit} method="post">
            <Field
              name="user"
              label="user"
              type="text"
              onChange={handleInputChange}
              required
            />

            <Field
              name="email"
              label="Email"
              type="email"
              onChange={handleInputChange}
              required
            />

            <Field
              name="password"
              label="password"
              type="password"
              onChange={handleInputChange}
              required
            />

            <CheckTerminos>
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                name="policy"
              />
              <p>
                Agree the end user license agreement and the privacuty policy.
              </p>
            </CheckTerminos>

            <Button primary type="submit">
              Create account
            </Button>
          </Form>
          <Link href="/login">Or log in.</Link>
        </Container>
      </div>
    </LayoutPages>
  )
}
