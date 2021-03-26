import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Disqus } from 'gatsby-plugin-disqus';

// Components
import LayoutWrapper from '../components/layout-wrapper';
import SEO from '../components/seo';
import { OutboundLink } from '../components/link';

import { BlogPostContainer, ImagePostContainer } from './styles';

interface BlogPost {
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
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
    fields: {
      slug: string;
      langKey: string;
    };
  };
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}

const Template: React.FC<PageProps<BlogPost>> = ({ data }) => {
  const { markdownRemark, site } = data;
  const { frontmatter, html } = markdownRemark;
  const { gatsbyImageData } = frontmatter.featuredImage.childImageSharp;
  const featuredImg = gatsbyImageData.images.fallback?.src;
  const disqusConfig = {
    url: `${site.siteMetadata.siteUrl + '/' + markdownRemark.fields.slug}`,
    identifier: markdownRemark.fields.slug,
    title: frontmatter.title,
  };

  return (
    <>
      <SEO
        description={frontmatter.description}
        title={frontmatter.title}
        image={featuredImg}
        article
      />
      <LayoutWrapper>
        <BlogPostContainer>
          <div className="blog-post">
            <ImagePostContainer>
              <GatsbyImage
                image={gatsbyImageData}
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
          <Disqus config={disqusConfig} />
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default Template;
