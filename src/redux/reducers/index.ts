import { combineReducers, Reducer, AnyAction } from "redux"

import { initialState } from "../initialState"

import auth from "@redux/slices/auth"
import user from "@redux/slices/user"

const combinedReducers = combineReducers({
  auth,
  user,
})

export type CombinedReducers = ReturnType<typeof combinedReducers>

const reducers: Reducer = (state: CombinedReducers, action: AnyAction) => {
  if (action.type === "RESET") {
    return initialState
  }
  return combinedReducers(state, action)
}

export default reducers
