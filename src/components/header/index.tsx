import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

// Assets
import HeaderWrapper from './styles';
import HeaderText from '../../constants/header-text';

type GetLangItem = {
  langKey: string;
  selected: boolean;
  link: string;
};

interface Props {
  langs: Array<GetLangItem>;
  currentLang: 'en' | 'pt';
}

function Header({ langs, currentLang }: Props): ReactElement {
  const selectLanguage = () => {
    const links = langs.map(lang => (
      <Link
        key={lang.langKey}
        partiallyActive={lang.selected}
        to={lang.link}
        className="language"
        activeClassName="activeLanguage"
      >
        <li>{lang.langKey}</li>
      </Link>
    ));

    return <ul className="languageWrapper">{links}</ul>;
  };

  return (
    <HeaderWrapper>
      <div>
        <Link
          to={currentLang === 'en' ? '/' : `/${currentLang}/`}
          className="link"
          activeClassName="activeLink"
        >
          {HeaderText[currentLang].home}
        </Link>
        <Link
          to={currentLang === 'en' ? '/blog' : `/${currentLang}/blog`}
          className="link"
          activeClassName="activeLink"
        >
          {HeaderText[currentLang].blog}
        </Link>
        <Link
          to={currentLang === 'en' ? '/contact' : `/${currentLang}/contact`}
          className="link"
          activeClassName="activeLink"
        >
          {HeaderText[currentLang].contact}
        </Link>
      </div>
      {selectLanguage()}
    </HeaderWrapper>
  );
}

export default Header;
