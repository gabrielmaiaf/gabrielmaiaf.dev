import React from 'react';
import { Link } from 'gatsby';

import HeaderWrapper from './styles';

function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Link
          to="/"
          className="link"
          activeClassName="activeLink"
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="link"
          activeClassName="activeLink"
        >
          Contact
        </Link>
      </div>
      <div>
        <span>EN</span>
        <span>PT</span>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
