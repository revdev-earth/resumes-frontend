// libraries
import { debounce } from "debounce"
// types
import type { Store } from "../store"
import type { CombinedReducers } from "../reducers"

const KEY = "rev"

export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem(KEY)
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const resetState = (state: CombinedReducers) => {
  try {
    const s = {
      app: {
        auth: { ...state.auth },
        user: { ...state.user },
      },
    }
    const stringState = JSON.stringify(s)
    sessionStorage.setItem(KEY, stringState)
  } catch (e) {
    // Ignore write errors;
  }
}

export const saveState = ({ app }: Store) => {
  try {
    const s = {
      auth: { ...app.auth },
      user: { ...app.user },
    }
    const stringState = JSON.stringify(s)
    sessionStorage.setItem(KEY, stringState)
  } catch (e) {
    // Ignore write errors;
  }
}

export const removeSessionState = () => {
  sessionStorage.removeItem(KEY)
}

export const subscribeStore = (store: any) => {
  // here we subscribe to the store changes
  store.subscribe(
    // we use debounce to save the state once each 800ms
    // for better performances in case multiple changes occur in a short time
    debounce(() => {
      saveState(store.getState())
    }, 1000)
  )
}
