// libraries
import { createSlice } from "@reduxjs/toolkit"

// initialState
import { initialState } from "@redux/initialState"

import { userEndpoints } from "@redux/api/endpoints/user"

// Slice

const userSlice = createSlice({
  name: "user",
  initialState: initialState.user,
  reducers: {
    clearUser: () => initialState.user,
    addNewUser: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  extraReducers: (b) => {
    b.addMatcher(userEndpoints.getUser.matchFulfilled, (state, action) => ({
      ...action.payload,
    }))
  },
})

export const { clearUser, addNewUser } = userSlice.actions

export default userSlice.reducer
