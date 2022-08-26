import { api } from "@redux/api"

export type Resume = {
  content: string | null
  template: string
  userId: number
}

const resume = api.injectEndpoints({
  endpoints: (build) => ({
    //
    getResume: build.query<Resume, any>({
      query: () => `resume`,
      providesTags: (result) => {
        console.log(" \n \n providesTags : result : \n \n ", result)
        return ["Resume"]
      },
    }),
    //
    putResume: build.mutation<Resume, any>({
      query: (body) => ({ url: "resume", method: "PUT", body }),
      invalidatesTags: ["User", "Resume"],
    }),
  }),
})

export const {
  useGetResumeQuery,
  usePutResumeMutation,
  endpoints: resumeEndpoints,
} = resume
