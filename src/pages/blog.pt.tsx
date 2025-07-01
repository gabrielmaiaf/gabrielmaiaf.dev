import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Blog, { BlogProps } from '../components/pages/blog';

export const pageQuery = graphql`
  query BlogPtQuery {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { langKey: { regex: "/(pt)/" } } }
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

const BlogPt: React.FC<PageProps<BlogProps>> = props => <Blog {...props} />;

export default BlogPt;
