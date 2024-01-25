import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Navigation from '@/components/navigation'; 
import Footer from '@/components/footer';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Letters to ManKind</title>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/favicon.ico" />
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
        </body>
      </Html>
    );
  }
}

export default MyDocument;
