import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { i18n } from '../src/helpers/i18n';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={i18n.language}>
        <Head>
          <link rel="shortcut icon" href="../public/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#172237" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-transparent" />
          <style dangerouslySetInnerHTML={{__html: `
            @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
            @import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
            body {
              margin: 0;
            }
          `}} />
          <script src="https://kit.fontawesome.com/11514f10c3.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
