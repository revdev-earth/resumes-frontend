import { api } from "@redux/api"

const user = api.injectEndpoints({
  endpoints: (build) => ({
    //
    getUser: build.query({
      query: () => ({
        url: `user`,
      }),

      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    //
    updateUser: build.mutation({
      query: (body) => ({
        url: `user`,
        method: "PUT",
        body,
      }),
    }),
  }),
})

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  endpoints: userEndpoints,
} = user
