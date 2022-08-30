// libraries
import { createSlice, isAnyOf } from "@reduxjs/toolkit"

// initialState
import { initialState } from "@redux/reducers/initialState"

// endpoints
import { authEndpoints } from "@redux/api/endpoints/auth"
import { meEndpoints } from "@redux/api/endpoints/me"

// Slice

const matchAuth = isAnyOf(
  authEndpoints.login.matchFulfilled,
  authEndpoints.signup.matchFulfilled,
  meEndpoints.getMe.matchFulfilled
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
      state.token = action.payload?.token
    })
  },
})

export const { set_auth_token, delete_token } = authSlice.actions

export default authSlice.reducer
