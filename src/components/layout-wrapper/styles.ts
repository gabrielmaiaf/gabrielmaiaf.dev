import styled, { createGlobalStyle } from 'styled-components';

const Layout = styled.div`
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;

  .layoutPageContainer {
    min-height: calc(100vh - 129px - 61px);
    text-align: center;
  }
`;

export const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'Open Sans';
    src: url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  }

  @font-face {
    font-family: 'Inconsolata';
    src: url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
  } */

  body {
    margin: 0;
  }
`;

export default Layout;
