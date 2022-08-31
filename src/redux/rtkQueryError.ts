import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit"
import Router from "next/router"
import { delete_token } from "."
import { api_reset } from "./api"

export const rtkQueryErrorHandler: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      if (action?.payload?.status === 401) {
        Router.push("/home")
        setTimeout(() => dispatch(api_reset()), 500)
        next(dispatch(delete_token()))
      }
    }

    return next(action)
  }
