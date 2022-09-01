// libraries
import { AnyAction, combineReducers, Reducer } from "redux"

import {
  TypedUseSelectorHook,
  useDispatch as useDispatchRedux,
  useSelector as useSelectorRedux,
} from "react-redux"

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
// import storage from "redux-persist/lib/storage"
import createWebStorage from "redux-persist/lib/storage/createWebStorage"

const createNoopStorage = () => {
  return {
    // eslint-disable-next-line no-unused-vars
    getItem(_key: any) {
      return Promise.resolve(null)
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value)
    },
    // eslint-disable-next-line no-unused-vars
    removeItem(_key: any) {
      return Promise.resolve()
    },
  }
}

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage()

import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

// import { loadState } from "./browserStorage"
import reducers, { CombinedReducers } from "./reducers"
import { api } from "./api"

// import type { CombinedReducers } from "./reducers"
import { rtkQueryErrorHandler } from "./rtkQueryError"

const persistConfig = {
  key: "root",
  version: 1,
  debug: true,
  storage,
}

export const isDevelopment = Boolean(process.env.NODE_ENV === "development")

const reducers_complete_app = combineReducers({
  app: <Reducer<CombinedReducers, AnyAction>>reducers,
  [api.reducerPath]: api.reducer,
})

const persisted_reducers_resumes_app = persistReducer(
  persistConfig,
  reducers_complete_app
)

export const store = configureStore({
  reducer: persisted_reducers_resumes_app,
  // here we restore the previously persisted state
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(api.middleware)
      .concat(rtkQueryErrorHandler),
  devTools: isDevelopment,
})

export let persistor = persistStore(store)

setupListeners(store.dispatch)

export type Store = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<Store> = useSelectorRedux
export const useDispatch = () => useDispatchRedux<Dispatch>()
