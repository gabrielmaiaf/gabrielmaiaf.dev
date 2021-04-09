import styled from 'styled-components';
import { shade } from 'polished';

const FooterWrapper = styled.footer`
  background-color: ${props => shade(0.3, props.theme.primary)};
  padding: 0 30px;

  .footerWrapper {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.primaryContrast};
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a,
    svg {
      color: ${props => props.theme.primaryContrast};
      font-size: 23px;
      margin: 5px 10px;
      transition: all 0.3s;
      opacity: 1;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .footerTitle {
    font-size: 25px;
  }

  .linkedin:hover {
    svg {
      color: #0077b5;
    }
  }

  .gitlab:hover {
    svg {
      color: #fc6d27;
    }
  }

  .github:hover {
    svg {
      color: ${props => props.theme.standard};
    }
  }

  .linksContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default FooterWrapper;
