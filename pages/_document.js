import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { i18n } from '../src/helpers/i18n';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={i18n.language}>
        <Head>
          <link rel="shortcut icon" href="../static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
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
