// libraries
import Head from "next/head"
import { Provider } from "react-redux"

// tailwind
import "@global/tailwind.css"

// config
import { ProviderStyled } from "@styled-components"
import { store, subscribeStore } from "@redux"

subscribeStore(store)

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

      <Provider store={store}>
        <ProviderStyled>
          <Component {...pageProps} />
        </ProviderStyled>
      </Provider>
    </>
  )
}
