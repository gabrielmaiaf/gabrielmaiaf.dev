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
  body {
    margin: 0;
  }
`;

export default Layout;
