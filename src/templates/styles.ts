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
    }
  }

  .feature-image {
    max-width: 800px;
    margin: 25px auto 0;
  }

  h1 {
    padding: 0.67em 0 0;
    margin: 0;
  }

  h2 {
    margin: 0;
    font-size: 1.3em;
    color: ${props => props.theme.subTitle};
    font-weight: bold;
  }
`;
