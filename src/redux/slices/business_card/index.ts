// libraries
import { createSlice } from "@reduxjs/toolkit"

// initialState
import { initialState } from "@redux/initialState"

import { userEndpoints } from "@redux/api/endpoints/user"

// Slice

const business_card_slice = createSlice({
  name: "business_card",
  initialState: initialState.business_card,
  reducers: {
    clear_business_card: () => initialState.business_card,
  },
  extraReducers: (b) => {
    b.addMatcher(userEndpoints.getUser.matchFulfilled, (state, action) => ({
      ...action.payload.business_card,
    }))
  },
})

export const { clear_business_card } = business_card_slice.actions

export default business_card_slice.reducer
