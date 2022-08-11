import { createSlice } from "@reduxjs/toolkit"

import { initialState } from "@redux/initialState"
import { userEndpoints } from "@redux/api/endpoints/user"

// Slice

const resumeSlice = createSlice({
  name: "resume",
  initialState: initialState.resume,
  reducers: {
    changeText: (state, { payload }) => payload,
    updateExperience: (state, { payload }) => ({
      ...state,
      experience: payload,
    }),
  },
  extraReducers: (b) => {
    b.addMatcher(userEndpoints.getUser.matchFulfilled, (state, action) => ({
      ...JSON.parse(action.payload.resume.content),
    }))
  },
})

export const { changeText } = resumeSlice.actions

export default resumeSlice.reducer
