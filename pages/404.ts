import { useRouter } from "next/router"
import { useEffect } from "react"

export default function NotFound() {
  const { push } = useRouter()

  useEffect(() => {
    push("home")
  })
}
