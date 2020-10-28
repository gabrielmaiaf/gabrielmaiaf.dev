import React from 'react';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

// Components
import LayoutWrapper from '../components/layout-wrapper';
import SEO from '../components/seo';
import { OutboundLink } from '../components/link';

import { BlogPostContainer, ImagePostContainer } from './styles';

interface BlogPost {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        date: string;
        alt: string;
        link: string;
        description: string;
        featuredImage: {
          childImageSharp: {
            fluid: FluidObject;
          };
        };
      };
      fields: {
        slug: string;
        langKey: string;
      };
    };
  };
}

const Template: React.FC<BlogPost> = ({ data }) => {
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
            <ImagePostContainer>
              <Img
                fluid={featuredImgFluid}
                alt={frontmatter.alt}
                className="feature-image"
              />
              <div>
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
              </div>
            </ImagePostContainer>
            <OutboundLink
              to={frontmatter.link}
              from="blogpost"
              target="_blank"
              className="caption"
              rel="noopener noreferrer"
            >
              {frontmatter.alt}
            </OutboundLink>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </BlogPostContainer>
      </LayoutWrapper>
    </>
  );
};

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

export default Template;
