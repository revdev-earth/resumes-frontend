import { useEffect, useState } from "react"
import Router from "next/router"
import Link from "next/link"

import { LayoutPages, Button, Field, Password } from "@components"
import { useLoginMutation } from "@redux/api/endpoints/auth"

export const Login = () => {
  const [formLogIn, setFormLogIn] = useState({
    username: "",
    password: "",
  })

  const [username_type, set_type_username] = useState<"text" | "email">("text")
  const [login, { isSuccess, isError, error }] = useLoginMutation()

  // handlers

  const handleSubmit = (e) => {
    e.preventDefault()
    login(formLogIn)
  }

  const handleInputChange = (event) => {
    setFormLogIn((s) => ({
      ...s,
      [event.target.name]: event.target.value,
    }))
  }

  // effects

  useEffect(() => {
    isSuccess && Router.push("lobby")
  }, [isSuccess])

  useEffect(() => {
    set_type_username(formLogIn.username.search(/@/) > 0 ? "email" : "text")
  }, [formLogIn, username_type])

  const show_error = () => {
    if (isError) {
      const { data, error: error_message } = error as {
        data?: { message: string } // comming from server
        error?: string // rtk error
      }

      let message = error_message ? error_message : ""

      if (data) {
        const { message: message_error } = data
        message = message_error
      }

      return <div className="text-[18px] leading-6 text-red-600">{message}</div>
    }
  }

  // return
  return (
    <LayoutPages>
      <div className="m-auto">
        <div
          className={`
          flex flex-col gap-[${isError ? "25px" : "50px"}]
          m-[50px] px-[50px] py-[50px] 
          w-[650px] rounded-3xl shadow-container 
          aling-center justify-center text-center
          `}
        >
          <h2>Log In</h2>

          {show_error()}

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <Field
              name="username"
              label="User / Email"
              type={username_type}
              onChange={handleInputChange}
              required
            />

            <div className="relative">
              <div className="absolute top-[-1px] right-0 z-10">
                <Link href="forgot_password">
                  <span className="font-medium cursor-pointer">
                    Forgot password?
                  </span>
                </Link>
              </div>
              <Password onChange={handleInputChange} />
            </div>

            <Button type="submit">Log in</Button>
          </form>
          <Link href="/create_account">
            <a>Or create account.</a>
          </Link>
        </div>
      </div>
    </LayoutPages>
  )
}
