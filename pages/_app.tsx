// config
import { ProviderStyled } from "@styled-components"
import { ProviderRedux } from "@redux"

// JSX

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProviderRedux>
        <ProviderStyled>
          <Component {...pageProps} />
        </ProviderStyled>
      </ProviderRedux>
    </>
  )
}
