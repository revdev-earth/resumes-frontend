import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const api = createApi({
  reducerPath: "api",

  tagTypes: ["Resumes"],

  endpoints: () => ({}),

  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
  }),
})
