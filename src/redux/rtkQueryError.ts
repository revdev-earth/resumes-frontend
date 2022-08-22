import {
  // MiddlewareAPI,
  isRejectedWithValue,
  Middleware,
} from "@reduxjs/toolkit"
import Router from "next/router"
// import { logout } from './slices/authSlice';

export const rtkQueryErrorHandler: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action?.payload?.status === 401) {
      // next(logout());
      // next("logout")
      Router.push("/home")
      console.log("\n \n logout \n \n")
    }
  }

  return next(action)
}
