import React from 'react';
import { getCurrentLangKey } from 'ptz-i18n';
import { graphql, PageProps, HeadProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Disqus } from 'gatsby-plugin-disqus';

// Components
import LayoutWrapper from '../components/layout-wrapper';
import SEO from '../components/seo';
import RichJson from '../components/seo/rich-json';
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
      defaultTitle: string;
      titleTemplate: string;
      defaultDescription: string;
      siteUrl: string;
      defaultImage: string;
      twitterUsername: string;
      author: string;
      languages: {
        defaultLangKey: string;
        langs: string[];
      }
    };
  };
}

const Template: React.FC<PageProps<BlogPost>> = ({ data }) => {
  const { markdownRemark, site } = data;
  const { frontmatter, html } = markdownRemark;
  const { gatsbyImageData } = frontmatter.featuredImage.childImageSharp;
  const disqusConfig = {
    url: `${site.siteMetadata.siteUrl}/${markdownRemark.fields.slug}`,
    identifier: markdownRemark.fields.slug,
    title: frontmatter.title,
  };

  return (
    <>
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
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
        author
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;

export default Template;

export const Head: React.FC<HeadProps<BlogPost>> = ({ location, data }) => {
  const { pathname } = location;
  const { markdownRemark, site } = data;
  const { frontmatter } = markdownRemark;
  const { gatsbyImageData } = frontmatter.featuredImage.childImageSharp;
  const featuredImg = gatsbyImageData.images.fallback?.src;

  const { langs, defaultLangKey } = site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);
  const patternTitle = site.siteMetadata.titleTemplate.replace(/%s/, frontmatter.title)

  return (
    <>
      <RichJson
        description={frontmatter.description}
        title={patternTitle}
        image={featuredImg}
        datePublished={frontmatter.date}
        siteMetadata={site.siteMetadata}
        pathname={pathname}
        langKey={langKey}
      />
      <SEO
        title={patternTitle}
        langKey={langKey}
        image={featuredImg}
        article={true}
        siteMetadata={site.siteMetadata}
        pathname={pathname}
      />
    </>
  )
}
