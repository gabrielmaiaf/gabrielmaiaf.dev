import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/scholarity">
      <a style={linkStyle}>Scholarity</a>
    </Link>
    <Link href="/knowledge">
      <a style={linkStyle}>Knowledge</a>
    </Link>
    <Link href="/experience">
      <a style={linkStyle}>Experience</a>
    </Link>
  </div>
);

export default Header;
