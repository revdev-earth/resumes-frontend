import { api } from "@redux/api"
import { User } from "../user"

export type Me = {
  name: string
  email: string

  user?: User
  userId: number
}

const me = api.injectEndpoints({
  endpoints: (build) => ({
    // get me
    getMe: build.query<Me, any>({
      query: ({ user_name }) => `me/${user_name}`,

      providesTags: (result, error, id) => [{ type: "Me", id }],
    }),
  }),
})

export const { useGetMeQuery, endpoints: meEndpoints } = me
