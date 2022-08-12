import { useSelector } from "@redux/store"
import { useRouter } from "next/router"
import { useEffect } from "react"

export const useNotToken = () => {
  const { push } = useRouter()
  const {
    auth: { token },
  } = useSelector((s) => s.app)

  useEffect(() => {
    if (!token) push("home")
  })
}
