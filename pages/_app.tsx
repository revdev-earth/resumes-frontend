// libraries
import Head from "next/head"

// Global
import "@global/global.css"

// tailwind
import "@global/tailwind.css"

// redux
import { ReduxProvider as Redux } from "@redux"

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

      <Redux>
        <Component {...pageProps} />
      </Redux>
    </>
  )
}
