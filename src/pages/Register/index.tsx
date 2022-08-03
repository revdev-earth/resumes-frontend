import { Form, Container, CheckTerminos } from "./styles"
import Link from "next/link"
import { LayoutPages } from "@components"
import InputGroup from "@components/InputGroup"
import Button from "@components/Button"
import { useState } from "react"
import { Label } from "@components/InputGroup/Label"
import { Input } from "@components/InputGroup/Input"

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
            <InputGroup>
              <Label htmlFor="user" title="user" />
              <Input
                onChange={handleInputChange}
                required
                type="text"
                name="user"
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="email" title="Your Email" />
              <Input
                onChange={handleInputChange}
                required
                type="email"
                name="email"
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="password" title="Password" />
              <Input
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
