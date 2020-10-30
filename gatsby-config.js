const languages = require('./config/languages');
const website = require('./config/website');

const pathPrefix = website.pathPrefix === `/` ? `` : website.pathPrefix;

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: website.pathPrefix,
  /* Your site config here */
  siteMetadata: {
    title: website.title,
    titleTemplate: website.titleTemplate,
    description: website.description,
    siteUrl: website.url,
    twitterUsername: website.twitter,
    image: website.image,
    headline: website.headline,
    author: website.author,
    languages,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: `src/@types/gatsby-types.ts`,
        emitSchema: {
          'src/@types/gatsby-introspection.json': true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/data/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              showCaptions: true
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              showLineNumbers: false,
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: website.googleAnalyticsId,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.shortName,
        description: website.description,
        start_url: `${pathPrefix}/?utm_source=a2hs`,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: `standalone`,
        icon: website.favicon,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
        markdownRemark: {
          postPage: 'src/templates/blog-template.tsx',
          query: `
            {
              allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug,
                      langKey
                    }
                  }
                }
              }
            }
          `,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Inconsolata', 'Open Sans', 'Fira Code']
        }
      }
    },
    // Must be placed at the end
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
