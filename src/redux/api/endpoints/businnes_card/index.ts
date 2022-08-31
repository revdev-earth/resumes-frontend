import { api } from "@redux/api"

export type Resume = {
  content: string
  template: string
  userId: number
}

const bussines_card = api.injectEndpoints({
  endpoints: (build) => ({
    //
    getBussinessCard: build.query<Resume, any>({
      query: () => `bussines_card`,
      providesTags: () => ["BussinessCard"],
    }),
    //
    putBussinessCard: build.mutation<Resume, any>({
      query: (body) => ({ url: "bussines_card", method: "PUT", body }),
      invalidatesTags: ["BussinessCard"],
    }),
  }),
})

export const {
  useGetBussinessCardQuery,
  usePutBussinessCardMutation,
  endpoints: bussines_cardEndpoints,
} = bussines_card
