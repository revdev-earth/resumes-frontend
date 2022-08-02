import { api } from "@redux/api"

const resume = api.injectEndpoints({
  endpoints: (build) => ({
    //
    resume: build.query({
      query: () => ({ url: `resumes` }),
    }),
  }),
})

export const { useResumeQuery, endpoints: resumeEndpoints } = resume
