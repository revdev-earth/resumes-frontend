import { api } from "@redux/api"

const user = api.injectEndpoints({
  endpoints: (build) => ({
    //
    createUser: build.mutation({
      query: ({ ...body }) => ({
        url: `user`,
        method: "POST",
        body: body,
      }),
    }),
  }),
})

export const { useCreateUserMutation, endpoints: resumeEndpoints } = user
