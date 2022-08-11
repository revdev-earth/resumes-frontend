// libraries
import { createSlice } from "@reduxjs/toolkit"

// initialState
import { initialState } from "@redux/initialState"

import { userEndpoints } from "@redux/api/endpoints/user"

// Slice

const templates_slice = createSlice({
  name: "templates",
  initialState: initialState.templates,
  reducers: {
    clear_templates: () => initialState.templates,
    add_template: (state, { payload }: { payload: string }) => {
      state.actual = payload
      state.preferences.push(payload)
    },
  },
  extraReducers: (b) => {
    b.addMatcher(userEndpoints.getUser.matchFulfilled, (state, { payload }) => {
      const templates = payload.resume.templates.split(", ")
      state.actual = templates[0]
      state.preferences = templates
    })
  },
})

export const { clear_templates, add_template } = templates_slice.actions

export default templates_slice.reducer
