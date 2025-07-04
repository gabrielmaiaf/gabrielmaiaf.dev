import React from 'react';
import { Script } from 'gatsby';

interface Props {
  title?: string;
  description?: string | null;
  image?: string | null;
  article?: boolean;
  datePublished?: string;
  pathname: string;
  siteMetadata: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    siteUrl: string;
    defaultImage: string;
    twitterUsername: string;
    author: string;
  };
  langKey: string;
}

const RichJson: React.FC<Props> = ({ title, description = null, image = null, datePublished, pathname, siteMetadata, langKey }) => {
  const { defaultTitle, defaultDescription, siteUrl, defaultImage } = siteMetadata;

  const articleSeo = {
    url: `${siteUrl}${pathname}`,
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    language: langKey === 'en' ? 'en-GB' : 'pt-BR',
    datePublished: datePublished || '',
  };

  return (
    <Script type="application/ld+json">
      {`{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "author": {
            "@type": "Person",
            "name": "Gabriel Maia Francisco",
            "url": "https://gabrielmaiaf.dev"
        },
        "image": "${articleSeo.image}",
        "headline": "${articleSeo.title}",
        "description": "${articleSeo.description}",
        "inLanguage": "${articleSeo.language}",
        "datePublished": "${articleSeo.datePublished}",
        "isFamilyFriendly": "true",
        "url": "${articleSeo.url}"
      }`}
    </Script>
  );
};

export default RichJson;
