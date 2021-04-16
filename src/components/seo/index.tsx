import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { getCurrentLangKey } from 'ptz-i18n';

interface Props {
  title?: string;
  description?: string | null;
  image?: string | null;
  article?: boolean;
  datePublished?: string;
}

interface QueryProps {
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
      };
    };
  };
}

const query = graphql`
  query SEO {
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

const SEO: React.FC<Props> = ({
  title,
  description = null,
  image = null,
  datePublished,
  article = false,
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery<QueryProps>(query);
  const { langs, defaultLangKey } = site.siteMetadata.languages;

  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    author,
  } = site.siteMetadata;

  const seo = {
    title,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  const articleSeo = {
    url: `${siteUrl}${pathname}`,
    title: title || '',
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    language: langKey === 'en' ? 'en-GB' : 'pt-BR',
    datePublished: datePublished || '',
  };

  return (
    <Helmet
      defaultTitle={defaultTitle}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <html lang={langKey} />

      <meta property="og:type" content={article ? 'article' : 'website'} />
      {article && <meta name="author" content={author} />}
      {article && (
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "author": {
              "@type": "Person",
              "name": "Gabriel Maia",
              "url": "https://gabrielmaia.dev"
            },
            "image": "${articleSeo.image}",
            "headline": "${articleSeo.title}",
            "description": "${articleSeo.description}",
            "inLanguage": "${articleSeo.language}",
            "datePublished": "${articleSeo.datePublished}",
            "isFamilyFriendly": "true",
            "url": "${articleSeo.url}"
          }`}
        </script>
      )}

      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && (
        <meta name="title" property="og:title" content={seo.title} />
      )}
      {seo.description && (
        <meta
          name="description"
          property="og:description"
          content={seo.description}
        />
      )}
      {seo.image && (
        <meta name="image" property="og:image" content={seo.image} />
      )}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;
