import { api } from "@redux/api"

export type Post = {
  id: number

  title: string
  content: string
  published: Boolean

  user?: User
  userId: number
}

export type Resume = {
  content: string
  template: string

  user?: User
  userId: number
}

export type Me = {
  name: string
  email: string

  user?: User
  userId: number
}

export type BussinesCard = {
  name: string
  profesion: string
  areaCode: string
  phone: string
  email: string

  user?: User
  userId: number
}

export type AccountInformation = Partial<{
  password: string
  max_attemps: number
  locked: Boolean

  user: User
  userId: number

  email_confirmed: Boolean
  terms_and_conditions_confirmed: Boolean
}>

export type User = {
  id: number
  posts?: Post[]
  resume: Resume
  me: Me
  business_card: BussinesCard
  account_information?: AccountInformation
}

const user = api.injectEndpoints({
  endpoints: (build) => ({
    //
    getUser: build.query<User, any>({
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
