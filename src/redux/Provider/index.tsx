// libraries
import { Provider } from "react-redux"

// store
import { store } from "../."

// JSX

export const ProviderRedux = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
)
