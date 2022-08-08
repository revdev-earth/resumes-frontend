// libraries
import { Reducer, AnyAction } from "redux"
import {
  TypedUseSelectorHook,
  useDispatch as useDispatchRedux,
  useSelector as useSelectorRedux,
} from "react-redux"

import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import { loadState } from "./browserStorage"
import reducers from "./reducers"
import { api } from "./api"

import type { CombinedReducers } from "./reducers"

export const isDevelopment = Boolean(process.env.NODE_ENV === "development")

const preloadedState = loadState()

export const store = configureStore({
  reducer: {
    app: <Reducer<CombinedReducers, AnyAction>>reducers,
    [api.reducerPath]: api.reducer,
  },
  // here we restore the previously persisted state
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: isDevelopment,
  preloadedState,
})

setupListeners(store.dispatch)

export type Store = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<Store> = useSelectorRedux
export const useDispatch = () => useDispatchRedux<Dispatch>()
