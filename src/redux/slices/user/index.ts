// libraries
import { createSlice } from "@reduxjs/toolkit"

// initialState
import { initialState } from "@redux/initialState"

// Slice

const userSlice = createSlice({
  name: "user",
  initialState: initialState.user,
  reducers: {
    clearUser: () => initialState.user,
  },
})

export const { clearUser } = userSlice.actions

export default userSlice.reducer
