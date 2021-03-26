import React from 'react';

import { InternalLink } from '../link';

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

const Header: React.FC<Props> = ({ langs, currentLang }) => {
  const selectLanguage = () => {
    const links = langs.map(lang => (
      <InternalLink
        key={lang.langKey}
        partiallyActive={lang.selected}
        to={lang.link}
        from="header"
        className="language"
        activeClassName="activeLanguage"
      >
        <li>{lang.langKey}</li>
      </InternalLink>
    ));

    return <ul className="languageWrapper">{links}</ul>;
  };

  return (
    <HeaderWrapper>
      <div>
        <InternalLink
          to={currentLang === 'en' ? '/' : `/${currentLang}/`}
          from="header"
          className="link"
          activeClassName="activeLink"
        >
          {HeaderText[currentLang].home}
        </InternalLink>
        <InternalLink
          to={currentLang === 'en' ? '/blog' : `/${currentLang}/blog`}
          from="header"
          className="link"
          activeClassName="activeLink"
        >
          {HeaderText[currentLang].blog}
        </InternalLink>
        <InternalLink
          to={currentLang === 'en' ? '/contact' : `/${currentLang}/contact`}
          from="header"
          className="link"
          activeClassName="activeLink"
        >
          {HeaderText[currentLang].contact}
        </InternalLink>
      </div>
      {selectLanguage()}
    </HeaderWrapper>
  );
};

export default Header;
