import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';

import Header from '../header';
import Footer from '../footer';

import Layout, { GlobalStyle } from './styles';
import Theme from '../../constants/theme';

interface GetLangItem {
  langKey: string;
  selected: boolean;
  link: string;
}

const LayoutWrapper: FC = ({ children }) => {
  const { site } = useStaticQuery(LayoutQuery);
  const { pathname } = useLocation();
  const { langs, defaultLangKey } = site.siteMetadata.languages;

  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, pathname))
    .map((item: GetLangItem) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
  
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Layout>
        <Header langs={langsMenu} currentLang={langKey} />
        <div className="layoutPageContainer">
          {children}
        </div>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default LayoutWrapper;

export const LayoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;