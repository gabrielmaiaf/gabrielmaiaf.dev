import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: ${props => props.theme.primary};
  padding: 20px 16px;
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .language,
  .link {
    color: ${props => props.theme.primaryContrast};
    margin-right: 15px;
    text-decoration: none;
    font-family: ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    cursor: pointer;
  }

  .activeLink {
    font-weight: bolder;
  }

  .language {
    padding: 2px 4px;
  }

  .activeLanguage {
    font-weight: bolder;
    border: 1px solid;
    border-radius: 3px;
  }

  .languageWrapper {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;

    a:last-child {
      margin-right: 0;
    }

    li {
      text-transform: uppercase;
    }
  }
`;

export default HeaderWrapper;
