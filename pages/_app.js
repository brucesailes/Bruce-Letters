
import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
 
export default function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/bruce-revamp.png" />
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

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}