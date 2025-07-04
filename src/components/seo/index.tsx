import React from 'react';

interface SeoProps {
  title?: string;
  description?: string | null;
  image?: string | null;
  article?: boolean;
  langKey: string;
  siteMetadata: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    siteUrl: string;
    defaultImage: string;
    twitterUsername: string;
    author: string;
  };
  pathname: string;
}

// interface QueryProps {
//   site: {
//     siteMetadata: {
//       defaultTitle: string;
//       titleTemplate: string;
//       defaultDescription: string;
//       siteUrl: string;
//       defaultImage: string;
//       twitterUsername: string;
//       author: string;
//       languages: {
//         defaultLangKey: string;
//         langs: string[];
//       };
//     };
//   };
// }


const SEO: React.FC<SeoProps> = ({
  title,
  description,
  image,
  article = false,
  langKey,
  siteMetadata,
  pathname,
}) => {
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    author,
  } = siteMetadata;

  const seo = {
    title,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <>
      <title>{seo.title || defaultTitle}</title>

      {/* meta */}
      <meta name="description" content={seo.description} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      {article && <meta name="author" content={author} />}
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* twitter  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* html tag */}
      <html lang={langKey} />
    </>
  );
};

export default SEO;
