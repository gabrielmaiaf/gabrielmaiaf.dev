import React from 'react';
import { getCurrentLangKey } from 'ptz-i18n';
import { graphql, PageProps, HeadProps } from 'gatsby';

import Blog, { BlogProps, EdgeProp } from '../components/pages/blog';
import SEO from '../components/seo';

interface BlogQuery {
  allMarkdownRemark: {
    edges: EdgeProp[]
  }
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
    }
  }
}

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

const BlogPt: React.FC<PageProps<BlogProps>> = props => <Blog {...props} />;

export default BlogPt;

export const Head: React.FC<HeadProps<BlogQuery>> = ({ location, data }) => {
  const { pathname } = location;

  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);
  const patternTitle = data.site.siteMetadata.titleTemplate.replace(/%s/, 'Blog')

  return (
    <SEO
      title={patternTitle}
      langKey={langKey}
      siteMetadata={data.site.siteMetadata}
      pathname={pathname}
    />
  )
}
