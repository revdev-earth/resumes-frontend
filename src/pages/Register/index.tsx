import { useState } from "react"
import Link from "next/link"

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
        <div
          className="
              flex flex-col gap-[50px]
              m-[50px] px-[50px] py-[50px] 
              w-[650px] rounded-3xl shadow-container 
              aling-center justify-center text-center"
        >
          <h2>Create account</h2>

          <form className="flex flex-col" onSubmit={handleSubmit} method="post">
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

            <div className="flex gap-[15px] mb-[30px] ">
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                name="policy"
                className="w-5 h-5"
              />
              <p>
                Agree the end user license agreement and the privacuty policy.
              </p>
            </div>

            <Button type="submit">Create account</Button>
          </form>
          <Link href="/login">Or log in.</Link>
        </div>
      </div>
    </LayoutPages>
  )
}
