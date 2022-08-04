import { Form, CheckTerminos } from "./styles"
import Link from "next/link"
import { LayoutPages } from "@components"
import InputGroup from "@components/InputGroup"
import Button from "@components/Button"
import { useState } from "react"

import { Container } from "./_components"
import { useCreateUserMutation } from "@redux/api/actions/user"

export const Register = () => {
  const [formCA, setFormCA] = useState({
    name: "",
    email: "",
    password: "",
    policy: false,
  })

  const [createUser] = useCreateUserMutation()

  //

  // Handlers

  const handleSubmit = (e) => {
    e.preventDefault()

    // check information

    // send information

    if (formCA.policy === true) {
      const { name, email, password } = formCA

      createUser({ name, email, password })
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

          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <label htmlFor="name">User</label>
              <input
                onChange={handleInputChange}
                required
                type="text"
                name="name"
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="email">Email</label>
              <input
                onChange={handleInputChange}
                required
                type="email"
                name="email"
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="password">password</label>
              <input
                onChange={handleInputChange}
                required
                type="password"
                name="password"
              />
            </InputGroup>

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
