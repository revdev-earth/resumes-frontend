import { createSlice } from "@reduxjs/toolkit"

import { initialState } from "@redux/initialState"

// Slice

const resumeSlice = createSlice({
  name: "resumes",
  initialState: initialState.resumes,
  reducers: {
    changeText: (state, { payload }) => payload,
    updateExperience: (state, { payload }) => ({
      ...state,
      experience: payload,
    }),
  },
})

export const { changeText } = resumeSlice.actions

export default resumeSlice.reducer
