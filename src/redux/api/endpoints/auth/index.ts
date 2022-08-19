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
    //
    confirm: build.mutation({
      query: () => ({ url: `auth/confirm_email`, method: "GET" }),
    }),
  }),
})

export const {
  useConfirmMutation,
  useLoginMutation,
  useSignupMutation,
  endpoints: authEndpoints,
} = auth
