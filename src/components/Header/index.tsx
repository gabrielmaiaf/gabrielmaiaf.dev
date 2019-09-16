import React from 'react';

import { i18n, Link, withTranslation } from '../../helpers/i18n';

// @ts-ignore
import StyleHeader from './style.scss';

const Header = (props: any) => (
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
      <Link href="/scholarity">
        <a className={StyleHeader.link}>{props.t('scholarity')}</a>
      </Link>
      <Link href="/knowledge">
        <a className={StyleHeader.link}>{props.t('knowledge')}</a>
      </Link>
      <Link href="/experience">
        <a className={StyleHeader.link}>{props.t('experience')}</a>
      </Link>
    </div>
    <div
      className={StyleHeader.changeLocaleContainer}
    >
      <button
        type="button"
        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}
      >
        {props.t('change-locale')}
      </button>
    </div>
  </div>
);

export default withTranslation('header')(Header);
