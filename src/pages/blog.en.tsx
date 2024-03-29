import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Blog, { BlogProps } from '../components/pages/blog';

export const pageQuery = graphql`
  query BlogEnQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { langKey: { regex: "/(en|any)/" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            alt
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
          fields {
            slug
            langKey
          }
        }
      }
    }
  }
`;

const BlogEn: React.FC<PageProps<BlogProps>> = props => <Blog {...props} />;

export default BlogEn;
