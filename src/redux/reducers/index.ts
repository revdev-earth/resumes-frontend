import { combineReducers, Reducer, AnyAction } from "redux"

import { initialState } from "./initialState"

import auth from "@redux/slices/auth"

const combinedReducers = combineReducers({
  auth,
})

export type CombinedReducers = ReturnType<typeof combinedReducers>

const reducers: Reducer = (state: CombinedReducers, action: AnyAction) => {
  if (action.type === "RESET") {
    return initialState
  }
  return combinedReducers(state, action)
}

export default reducers
