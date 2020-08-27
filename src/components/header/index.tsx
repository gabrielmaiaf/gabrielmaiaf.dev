import React from 'react';
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

function Header({ langs, currentLang }: Props) {
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

  const text = (lang: 'pt' | 'en', key: 'home' | 'contact' | 'blog') => {
    return HeaderText[lang][key];
  };

  return (
    <HeaderWrapper>
      <div>
        <Link to="/" className="link" activeClassName="activeLink">
          {text(currentLang, 'home')}
        </Link>
        <Link to="/blog" className="link" activeClassName="activeLink">
          {text(currentLang, 'blog')}
        </Link>
        <Link to="/contact" className="link" activeClassName="activeLink">
          {text(currentLang, 'contact')}
        </Link>
      </div>
      {selectLanguage()}
    </HeaderWrapper>
  );
}

export default Header;
