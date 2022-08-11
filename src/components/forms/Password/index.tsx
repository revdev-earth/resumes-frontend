import { useState } from "react"
import { Field } from "../Field"

export const Password = ({ onChange }) => {
  const [show, set_show] = useState(false)
  return (
    <div className="relative">
      <Field
        name="password"
        label="Password"
        type={show ? "text" : "password"}
        onChange={onChange}
        required
      />
      <div
        className="
          absolute right-4 top-1/2 -translate-y-[28%]
          cursor-pointer font-medium
        "
        onClick={() => set_show((s) => !s)}
      >
        {!show ? "show" : "hide"}
      </div>
    </div>
  )
}
