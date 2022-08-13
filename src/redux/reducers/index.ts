import { combineReducers, Reducer, AnyAction } from "redux"

import { initialState } from "../initialState"

import auth from "@redux/slices/auth"
import user from "@redux/slices/user"
import resume from "@redux/slices/resume"
import business_card from "@redux/slices/business_card"
import templates from "@redux/slices/templates"

const combinedReducers = combineReducers({
  auth,
  user,
  resume,
  business_card,
  templates,
})

export type CombinedReducers = ReturnType<typeof combinedReducers>

const reducers: Reducer = (state: CombinedReducers, action: AnyAction) => {
  if (action.type === "RESET") {
    return initialState
  }
  return combinedReducers(state, action)
}

export default reducers
