// libraries
import Head from "next/head"

// config
import { ProviderStyled } from "@styled-components"
import { ProviderRedux } from "@redux"

// JSX

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <ProviderRedux>
        <ProviderStyled>
          <Component {...pageProps} />
        </ProviderStyled>
      </ProviderRedux>
    </>
  )
}
