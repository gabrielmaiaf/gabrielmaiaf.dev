import styled, { createGlobalStyle } from 'styled-components';

const Layout = styled.div`
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;

  .layoutPageContainer {
    min-height: calc(100vh - 129px - 61px);
    text-align: center;
  }

  .contactPageContainer {
    margin-top: 0;
    padding-top: 5px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #3E485F;
  }
`;

export default Layout;
