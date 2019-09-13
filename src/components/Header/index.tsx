import React from 'react';
import Link from 'next/link';

// @ts-ignore
import StyleHeader from './style.scss';

const Header = () => (
  <div>
    <Link href="/">
      <a className={StyleHeader.link}>Home</a>
    </Link>
    <Link href="/about">
      <a className={StyleHeader.link}>About</a>
    </Link>
    <Link href="/scholarity">
      <a className={StyleHeader.link}>Scholarity</a>
    </Link>
    <Link href="/knowledge">
      <a className={StyleHeader.link}>Knowledge</a>
    </Link>
    <Link href="/experience">
      <a className={StyleHeader.link}>Experience</a>
    </Link>
  </div>
);

export default Header;
