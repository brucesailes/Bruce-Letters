import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Navigation from '@/components/navigation'; 
import Footer from '@/components/footer';



class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
