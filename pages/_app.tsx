// libraries
import Head from "next/head"

// Global
import "@global/global.css"

// tailwind
import "@global/tailwind.css"

// redux
import { ReduxProvider as Redux } from "@redux"
import { NextSeo } from "next-seo"

// JSX

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Resumes"
        description="This is a resumes side used for public resumes"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://resumes-frontend.onrender.com",
          title: "Open Resumes",
          description: "Open Resumes Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "Resumes",
        }}
      />
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
