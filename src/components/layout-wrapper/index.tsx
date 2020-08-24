import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components';

import Header from '../header-container';
import Footer from '../footer';

import Layout, { GlobalStyle } from './styles';
import Theme from '../../constants/theme';

const LayoutWrapper: FC = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Layout>
      <Header />
      <div className="layoutPageContainer">
        {children}
      </div>
      <Footer />
    </Layout>
  </ThemeProvider>
)

export default LayoutWrapper;