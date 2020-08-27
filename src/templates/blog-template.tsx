import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';

import LayoutWrapper from '../components/layout-wrapper';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: any): ReactNode {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <LayoutWrapper>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      fields {
        slug
        langKey
      }
    }
  }
`;
