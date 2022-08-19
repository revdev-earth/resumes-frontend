import { useEffect } from "react"
import { useRouter } from "next/router"

import { useDispatch } from "@redux"
import { set_auth_token } from "@redux/slices"
import { useConfirmMutation } from "@redux/api/endpoints/auth"

export default function DefaultFunction() {
  var router = useRouter()
  var token = router.query["token"]
  const dispatch = useDispatch()

  const [confirm, { isSuccess }] = useConfirmMutation()

  useEffect(() => {
    if (token) {
      dispatch(set_auth_token(token))
      confirm({})
      setTimeout(() => {
        window.close()
      }, 5000)
    }
  }, [dispatch, token, confirm])

  useEffect(() => {
    isSuccess && window.close()
  }, [isSuccess])

  return <div>Esta ventana se autodestruira en 5 segundos!</div>
}
