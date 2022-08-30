import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit"
import Router from "next/router"
import { delete_token } from "."

export const rtkQueryErrorHandler: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      if (action?.payload?.status === 401) {
        Router.push("/home")
        next(dispatch(delete_token()))
      }
    }

    return next(action)
  }
