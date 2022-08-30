import { api } from "@redux/api"

export type Resume = {
  content: string
  template: string
  userId: number
}

const bussines_card = api.injectEndpoints({
  endpoints: (build) => ({
    //
    getBussinessWithJwt: build.query<Resume, any>({
      query: () => `bussines_card`,
      providesTags: () => ["BussinessCard"],
    }),
    //
    getBussinessWithParameter: build.query<Resume, any>({
      query: ({ userId }) => `bussines_card/${userId}`,
      providesTags: () => ["BussinessCard"],
    }),
  }),
})

export const {
  useGetBussinessWithJwtQuery,
  useGetBussinessWithParameterQuery,
  endpoints: bussines_cardEndpoints,
} = bussines_card
