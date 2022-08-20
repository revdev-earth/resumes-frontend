import { useEffect } from "react"
import { useRouter } from "next/router"

import { useSelector } from "@redux"

export const useNotToken = () => {
  const { push } = useRouter()
  const {
    auth: { token },
  } = useSelector((s) => s.app)

  useEffect(() => {
    if (!token) push("home")
  })
}
