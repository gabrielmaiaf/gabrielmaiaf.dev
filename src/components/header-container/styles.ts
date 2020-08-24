import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: ${props => props.theme.primary};
  padding: 20px 16px;
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link {
    color: ${props => props.theme.primaryContrast};
    margin-right: 15px;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;    
  }

  .activeLink {
    cursor: pointer;
    color: ${props => props.theme.primaryContrast};
    font-weight: bolder;
    margin-right: 15px;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default HeaderWrapper;