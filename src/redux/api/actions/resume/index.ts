import { api } from "@redux/api"

const resume = api.injectEndpoints({
  endpoints: (build) => ({
    //
    resumes: build.query({
      query: () => ({ url: `resumes` }),
    }),
    //
    resumesWithUserId: build.query({
      query: () => ({ url: `resumes` }),
    }),
  }),
})

export const { useResumesWithUserIdQuery, endpoints: resumeEndpoints } = resume
