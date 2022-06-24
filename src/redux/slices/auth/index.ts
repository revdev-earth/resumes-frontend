// libraries
import { createSlice } from "@reduxjs/toolkit"

// initialState
import { initialState } from "@redux/initialState"

// Slice

const authSlice = createSlice({
  name: "auth",
  initialState: initialState.auth,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload
    },
    deleteAuthToken: () => initialState.auth,
  },
})

export const { setAuthToken, deleteAuthToken } = authSlice.actions

export default authSlice.reducer
