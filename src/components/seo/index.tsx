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
  } = site.siteMetadata;

  const seo = {
    title,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      defaultTitle={defaultTitle}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <html lang={langKey} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

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
