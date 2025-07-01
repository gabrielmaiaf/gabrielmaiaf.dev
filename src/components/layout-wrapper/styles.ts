import styled, { createGlobalStyle } from 'styled-components';

const Layout = styled.div`
  min-height: 100vh;
  font-family: ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";

  .layoutPageContainer {
    min-height: calc(100vh - 129px - 61px);
    text-align: center;
  }

  .contactPageContainer {
    margin-top: 0;
    padding-top: 5px;
  }

  h1 {
    color: #f3f9ff;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #0d1222;
  }
`;

export default Layout;
