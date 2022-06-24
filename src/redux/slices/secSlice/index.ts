import { createSlice } from "@reduxjs/toolkit"

import { initialState } from "@redux/initialState"

// Slice

const resumeSlice = createSlice({
  name: "resumes",
  initialState: initialState.resumes,
  reducers: {
    checkAny: (state, action) => {
      state.check = action.payload
    },
  },
})

export const { checkAny } = resumeSlice.actions

export default resumeSlice.reducer
