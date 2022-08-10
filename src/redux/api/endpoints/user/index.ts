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
  }),
})

export const { useGetUserQuery, endpoints: userEndpoints } = user
