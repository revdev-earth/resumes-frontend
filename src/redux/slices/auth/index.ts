// libraries
import { createSlice, isAnyOf } from "@reduxjs/toolkit"

// initialState
import { initialState } from "@redux/initialState"
import { authEndpoints } from "@redux/api/endpoints/auth"

// endpoints

// Slice

const matchAuth = isAnyOf(
  authEndpoints.login.matchFulfilled,
  authEndpoints.signup.matchFulfilled
)

const authSlice = createSlice({
  name: "auth",
  initialState: initialState.auth,
  reducers: {
    set_auth_token: (state, action) => {
      state.token = action.payload
    },
    delete_token: () => initialState.auth,
  },
  extraReducers: (b) => {
    b.addMatcher(matchAuth, (state, action) => {
      state.token = action.payload.access_token
    })
  },
})

export const { set_auth_token, delete_token } = authSlice.actions

export default authSlice.reducer
