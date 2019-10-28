import React from 'react';
import Head from 'next/head';

type Props = {
  title: React.ReactNode;
}

function HeadComponent(props: Props) {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  )
}

export default HeadComponent;