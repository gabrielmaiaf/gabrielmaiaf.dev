import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.footer};
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
    }
  }

  .footerTitle {
    font-size: 25px;
  }

  .linkedin:hover {
    svg {
      color: ${props => props.theme.brands.linkedin};
    }
  }

  .gitlab:hover {
    svg {
      color: ${props => props.theme.brands.gitlab};
    }
  }

  .gitlab:hover {
    svg {
      color: ${props => props.theme.standard};
    }
  }

  .gitlab:hover,
  .linkedin:hover,
  .mail:hover,
  .github:hover {
    svg {
      opacity: 0.7;
    }
  }
`;

export default FooterWrapper;