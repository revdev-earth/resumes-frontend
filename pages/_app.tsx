// libraries
import Head from "next/head";

// config
import { ProviderStyled } from "@styled-components";
import { ProviderRedux } from "@redux";

// JSX

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ProviderRedux>
        <ProviderStyled>
          <Component {...pageProps} />
        </ProviderStyled>
      </ProviderRedux>
    </>
  );
}
