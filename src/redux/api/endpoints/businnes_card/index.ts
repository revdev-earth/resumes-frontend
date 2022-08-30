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
  }),
})

export const {
  useGetBussinessWithJwtQuery,
  endpoints: bussines_cardEndpoints,
} = bussines_card
