import React from 'react';

// Helpers
import { i18n, Link, withTranslation } from '../../helpers/i18n';

// Assets
import StyleHeader from './style.scss';

function Header (props: any) {
  const handleLanguageChange = (text: string, current: string) => {
    if (text === 'en' && current === 'en')
      return null;
    
    if (text === 'pt' && current === 'pt')
      return null;
    
    return i18n.changeLanguage(text);
  }

  return (
    <div
      className={StyleHeader.headerContainer}
    >
      <div
        className={StyleHeader.linkWrapper}
      >
        <Link href="/">
          <a className={StyleHeader.link}>{props.t('home')}</a>
        </Link>
        <Link href="/about">
          <a className={StyleHeader.link}>{props.t('about')}</a>
        </Link>
        <Link href="/portfolio">
          <a className={StyleHeader.link}>{props.t('portfolio')}</a>
        </Link>
        <Link href="/contact">
          <a className={StyleHeader.link}>{props.t('contact')}</a>
        </Link>
      </div>
      <div
        className={StyleHeader.changeLocaleContainer}
      >
        <a
          className={i18n.language === 'en' ? StyleHeader.activeLink : StyleHeader.link}
          onClick={() => handleLanguageChange('en', i18n.language)}
        >
          {props.t('locale.en')}
        </a>
        <a
          className={i18n.language === 'pt' ? StyleHeader.activeLink : StyleHeader.link}
          onClick={() => handleLanguageChange('pt', i18n.language)}
        >
          {props.t('locale.pt')}
        </a>
      </div>
    </div>
  )
};

export default withTranslation('common')(Header);
