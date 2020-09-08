import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import LayoutWrapper from '../components/layout-wrapper';
import SEO from '../components/seo';

import { BlogPostContainer } from './styles';

export default function Template({ data }: any): ReactNode {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <>
      <SEO
        description={frontmatter.description}
        title={frontmatter.title}
        image={featuredImgFluid.src}
        article
      />
      <LayoutWrapper>
        <BlogPostContainer>
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <Img
              fluid={featuredImgFluid}
              alt={frontmatter.alt}
              className="feature-image"
            />
            <a
              href={frontmatter.link}
              target="_blank"
              className="caption"
              rel="noopener noreferrer"
            >
              {frontmatter.alt}
            </a>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </BlogPostContainer>
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        link
        description
      }
      fields {
        slug
        langKey
      }
    }
  }
`;
