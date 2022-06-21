// libraries
import {
  TypedUseSelectorHook,
  useDispatch as useDispatchRedux,
  useSelector as useSelectorRedux,
} from "react-redux"
import { Reducer, AnyAction } from "redux"

import { configureStore } from "@reduxjs/toolkit"
import { loadState } from "./browserStorage"
import { setupListeners } from "@reduxjs/toolkit/query"

import type { CombinedReducers } from "./reducers"

import reducers from "./reducers"

export const isDevelopment = Boolean(process.env.NODE_ENV === "development")

const preloadedState = loadState()

export const store = configureStore({
  reducer: <Reducer<CombinedReducers, AnyAction>>reducers,
  devTools: isDevelopment,
  preloadedState,
})

export type Store = ReturnType<typeof store.getState>

setupListeners(store.dispatch)

export type Dispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<Store> = useSelectorRedux
export const useDispatch = () => useDispatchRedux<Dispatch>()
