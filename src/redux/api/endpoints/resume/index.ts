import { api } from "@redux/api"

const resume = api.injectEndpoints({
  endpoints: (build) => ({
    //
    resumes: build.query({
      query: () => `resumes`,
    }),
    //
    resume: build.query({
      query: () => `resume`,
    }),
    //
    putResume: build.mutation({
      query: (body) => ({ url: "resume", method: "PUT", body }),
    }),
  }),
})

export const {
  useResumeQuery,
  usePutResumeMutation,
  endpoints: resumeEndpoints,
} = resume
