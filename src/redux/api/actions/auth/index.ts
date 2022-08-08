import { api } from "@redux/api"

const auth = api.injectEndpoints({
  endpoints: (build) => ({
    //
    login: build.mutation({
      query: (body) => ({
        url: `auth/login`,
        method: "POST",
        body: body,
      }),
    }),
    //
    signup: build.mutation({
      query: (body) => ({
        url: `auth/signup`,
        method: "POST",
        body: body,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useSignupMutation,
  endpoints: authEndpoints,
} = auth
