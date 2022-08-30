import { api } from "@redux/api"

export type Resume = {
  content: string | null
  template: string
  userId: number
}

const resume = api.injectEndpoints({
  endpoints: (build) => ({
    //
    getResumeWithJwt: build.query<Resume, any>({
      query: () => `resume`,
      providesTags: () => ["Resume"],
    }),
    //
    putResume: build.mutation<Resume, any>({
      query: (body) => ({ url: "resume", method: "PUT", body }),
      invalidatesTags: ["User", "Resume"],
    }),
  }),
})

export const {
  useGetResumeWithJwtQuery,
  usePutResumeMutation,
  endpoints: resumeEndpoints,
} = resume
