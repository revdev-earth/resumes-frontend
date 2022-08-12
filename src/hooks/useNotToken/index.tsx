import { useSelector } from "@redux/store"
import { Router } from "next/router"
import { useEffect } from "react"

export const useNotToken = () => {
  const {
    auth: { token },
  } = useSelector((s) => s.app)

  useEffect(() => {
    if (!token) Router.push("home")
  })
}
