import styled from 'styled-components';

export const BlogPostContainer = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primaryContrast};
  padding: 10px 30px 20px;

  .caption {
    text-align: center;
    color: ${props => props.theme.postPhotoCaption};
    font-size: 12px;
  }

  .blog-post-content {
    text-align: start;

    h2 {
      padding-top: 10px;
    }

    .gatsby-highlight {
      display: flex;
      justify-content: center;

      code {
        font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
          monospace;
      }
    }
  }

  .feature-image {
    max-width: 800px;
    margin: 25px auto 0;
    height: 500px;
  }

  h1 {
    margin: 20px 0 0;
  }

  h2 {
    margin: 0 0 32px;
    font-size: 1.3em;
    color: ${props => props.theme.subTitle};
    font-weight: bold;
  }
`;

export const ImagePostContainer = styled.div`
  max-width: 800px;
  position: relative;
  text-align: center;
  height: 500px;
  margin: 0 auto;

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${props => props.theme.backgroundTextImage};
  }
`;
