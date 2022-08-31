import { useEffect, useState } from "react"
import Link from "next/link"
import Router from "next/router"

import { Button, Field, LayoutPages, Password } from "@components"
import { useSignupMutation } from "@redux/api/endpoints/auth"

export const Singup = () => {
  const [singup, { isSuccess, isError, error }] = useSignupMutation()

  const [formCA, setFormCA] = useState({
    name: "",
    email: "",
    password: "",
    policy: false,
  })

  // handlers

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formCA.policy === true) {
      // TODO: hacer una tarea para agrergar policy a la tabla de me
      // eslint-disable-next-line no-unused-vars
      const { policy, ...body } = formCA
      singup({ ...body, terms_and_conditions_confirmed: policy })
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

  // efects

  useEffect(() => {
    isSuccess && Router.push("lobby")
  }, [isSuccess])

  const show_error = () => {
    if (isError) {
      const {
        data: { message },
      } = error as { data: { message: string } }
      return <div className="text-[18px] leading-6 text-red-600">{message}</div>
    }
  }

  return (
    <LayoutPages>
      <div className="m-auto">
        <div
          className={`
            flex flex-col gap-[${isError ? "25px" : "50px"}]
            w-full md:h-fit
            md:m-[50px] md:mx-auto
            px-[50px] py-[50px] 
            md:w-[600px] md:rounded-3xl md:shadow-container 
            aling-center justify-center text-center
          `}
        >
          <h2>Create account</h2>
          {show_error()}
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit}
            method="post"
          >
            <Field
              name="name"
              label="name"
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

            <Password onChange={handleInputChange} />

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
