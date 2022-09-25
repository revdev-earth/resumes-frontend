import { api } from "@redux/api"
import { User } from "../user"

export type Me = {
  name: string
  email: string

  user?: User
  userId: number
}

type RecivedInformation = {
  me: Me
  token: string
  role: string
}

const me = api.injectEndpoints({
  endpoints: (build) => ({
    // get me
    getMe: build.query<RecivedInformation | null, any>({
      query: ({ user_name }) => `me/${user_name}`,

      providesTags: (_result, _error, id) => [{ type: "Me", id }],
    }),
  }),
})

export const { useGetMeQuery, endpoints: meEndpoints } = me
