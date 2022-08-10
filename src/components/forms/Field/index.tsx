import { InputHTMLAttributes } from "react"

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  type: string
  value?: string
}

export const Field = ({ name, label, type, value, ...arg }: FieldProps) => {
  return (
    <div className="relative flex flex-col items-start">
      <label htmlFor={name} className="mb-1 text-base origin-left">
        {label}
      </label>
      <input
        className="mb-4 p-4 w-full bg-transparent border-solid rounded-md border-2 border-black"
        name={name}
        type={type}
        value={value}
        {...arg}
      />
    </div>
  )
}
