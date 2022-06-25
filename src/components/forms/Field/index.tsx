import * as React from "react"
import { useController, UseControllerProps } from "react-hook-form"

export const Field = (props: UseControllerProps<any>) => {
  const { field } = useController(props)

  return (
    <div>
      <input {...field} placeholder={props.name} />
    </div>
  )
}
