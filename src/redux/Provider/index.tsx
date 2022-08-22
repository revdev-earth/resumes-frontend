// libraries
import { Provider } from "react-redux"

// redux-persist
import { PersistGate } from "redux-persist/integration/react"

// redux
import { persistor, store } from "@redux"

// JSX

export const ReduxProvider = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
)
