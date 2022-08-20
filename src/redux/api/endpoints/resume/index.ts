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
  }),
})

export const { useResumeQuery, endpoints: resumeEndpoints } = resume
