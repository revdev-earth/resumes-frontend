import { useRouter } from "next/router"

import { useSelector } from "@redux"
import { Loader } from "@components/common/Loader"

export const LoaderToken = ({ children }) => {
  const { push } = useRouter()
  const {
    auth: { token },
  } = useSelector((s) => s.app)

  if (!token) {
    push("home")
    return <Loader />
  }

  return children
}
