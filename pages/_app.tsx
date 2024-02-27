import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
 
export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
    <Head>
      <title>Letters to Mankind</title> 
    </Head>
      <Component {...pageProps} />
  </>
  )
}