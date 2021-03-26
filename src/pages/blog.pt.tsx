import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Blog, { BlogProps } from '../components/pages/blog';

export const pageQuery = graphql`
  query BlogPtQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { langKey: { regex: "/(pt)/" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            alt
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
