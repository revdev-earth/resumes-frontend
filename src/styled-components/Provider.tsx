// libraries
import { ThemeProvider } from "styled-components"

// config
import { theme } from "./theme"
import { GlobalStyle } from "./GlobalStyles"

// JSX

export const ProviderStyled = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
