import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
 
export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
    <Head>
      <title>Letters to Mankind</title> 
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/Letters.png" />
          <meta
            name="description"
            content="Letters to ManKind"
          />
           <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
    </Head>
      <Component {...pageProps} />
  </>
  )
}