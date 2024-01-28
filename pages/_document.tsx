import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navigation from '@/components/navigation'; 
import Footer from '@/components/footer';



class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add meta tags here */}
          <title>Letters to ManKind</title> 
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
          <link rel="icon" href="/Letters.png" />
          <meta
            name="description"
            content="Letters to ManKind"
          />
          {/* Add the custom font link here */}
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Navigation />
          <Main />
          <NextScript />
          <Footer />
          <SpeedInsights />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
