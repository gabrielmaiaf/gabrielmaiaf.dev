import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { i18n } from '../src/helpers/i18n';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={i18n.language}>
        <Head>
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
