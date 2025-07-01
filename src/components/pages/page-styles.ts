import styled from 'styled-components';

export const HomeStyles = styled.div`
  background-color: ${props => props.theme.primaryBg};

  .hero-wrapper {
    max-width: 72rem;
    padding: 12rem 0 7rem;
    margin: 0 auto;

    h1 {
      font-size: 4.5rem;
      margin: 3rem 0;
      color: ${props => props.theme.primaryText};
    }

    svg {
      width: 2rem;
      height: 2rem;
      vertical-align: middle;
    }
  }

  .hero-description {
    max-width: 56rem;
    margin: 0 auto 3rem auto;

    p {
      color: ${props => props.theme.primarySubText};
    }

    .presentation {
      font-size: 1.5rem;
      line-height: 2rem;
      color: ${props => props.theme.primaryText};
      margin: 2rem 0 4rem;
    }
  }

  .hero-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-botton: 2rem;
    gap: 1rem;
  }

  .hero-icon-container {
    padding: 0.75rem;
    border-radius: 100%;
    border-width: 1px;
    border-style: solid;
  }

  .programming-icon {
    background-color: ${props => props.theme.icon.progBg};
    border-color: ${props => props.theme.icon.prog};

    svg {
      color: ${props => props.theme.icon.prog};
    }
  }

  .music-icon {
    background-color: ${props => props.theme.icon.musicBg};
    border-color: ${props => props.theme.icon.music};

    svg {
      color: ${props => props.theme.icon.music};
    }
  }

  .headphones-icon {
    background-color: ${props => props.theme.icon.headphBg};
    border-color: ${props => props.theme.icon.headph};

    svg {
      color: ${props => props.theme.icon.headph};
    }
  }

  .guitar-icon {
    background-color: ${props => props.theme.icon.guitarBg};
    border-color: ${props => props.theme.icon.guitar};

    svg {
      color: ${props => props.theme.icon.guitar};
    }
  }

  .cross-icon {
    background-color: ${props => props.theme.icon.faithBg};
    border-color: ${props => props.theme.icon.faith};

    svg {
      color: ${props => props.theme.icon.faith};
    }
  }

  .hero-widget-container {
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr))
    }
    display: grid;
    gap: 2rem;
    color: ${props => props.theme.primaryText};

    h3 {
      font-weight: 600;
      margin: 0;
    }

    .programmer-widget, .music-widget {
      display: flex;
      align-items: center;

      svg {
        margin: 0 1rem;
      }
      
      h3 {
        width: 120px;
        margin-right: .25rem;
      }

      svg, h3 {
        flex-shrink: 0;
      }
    }

    .hero-widget-left-container {
      gap: 2rem;
      display: flex;
      flex-direction: column;
    }

    .programmer-widget {
      background-color: ${props => props.theme.icon.progBg};
      border: 1px solid ${props => props.theme.icon.prog};
      border-radius: .5rem;

      svg {
        color: ${props => props.theme.icon.prog};
      }
    }

    .music-widget {
      background-color: ${props => props.theme.icon.guitarBg};
      border: 1px solid ${props => props.theme.icon.guitar};
      border-radius: .5rem;

      svg {
        color: ${props => props.theme.icon.guitar};
      }
    }

    .hero-widget-right {
      background-color: ${props => props.theme.icon.headphBg};
      border: 1px solid ${props => props.theme.icon.headph};
      border-radius: 1rem;

      .listening-title {
        display: inline-flex;
        align-items: center;
        margin: 0.75rem auto;
      }

      span {
        margin-left: .5rem;
      }

      svg {
        color: ${props => props.theme.icon.headph};
      }
    }
  }

  .presentationContact {
    padding: 40px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 25px 40px 0;
    border-top: 1px solid ${props => props.theme.primaryBorder};
    color: ${props => props.theme.primaryText};
  }

  .contactButton {
    cursor: pointer;
    background-color: ${props => props.theme.buttonColor};
    border: 2px solid ${props => props.theme.buttonColor};
    color: ${props => props.theme.primary};
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 4px;
  }

`;

export const BlogStyles = styled.div`
  padding: 20px 25px 0;
  background-color: ${props => props.theme.background};
  min-height: 71vh;

  h1 {
    margin-top: 0;
    color: ${props => props.theme.primaryContrast};
  }

  ul {
    padding-left: 0;
    padding-bottom: 10px;
  }

  li {
    list-style: none;
    text-align: start;
    padding: 10px;

    & + li {
      padding-top: 20px;
    }
  }

  a {
    color: ${props => props.theme.primaryContrast};
    text-decoration: none;
  }

  header {
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }

  .time {
    margin-top: 5px;
    font-size: 14px;
  }

  .post-image {
    height: 180px;
    margin-bottom: 10px;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
  }
`;
