import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Store } from "@redux"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const api = createApi({
  reducerPath: "api",

  tagTypes: ["Resumes", "User"],

  endpoints: () => ({}),

  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,

    prepareHeaders: (headers, { getState }) => {
      const state = (<Store>getState()).app
      const token = state.auth.token

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) headers.set("authorization", `Bearer ${token}`)

      return headers
    },
  }),
})
