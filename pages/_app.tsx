import React from 'react';
import App, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from '../src/helpers/i18n';
import '../public/empty-style.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <script src="https://kit.fontawesome.com/11514f10c3.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp)