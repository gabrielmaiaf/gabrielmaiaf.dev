import { useStaticQuery, graphql, Script } from 'gatsby';
import { useLocation } from '@reach/router';
import { getCurrentLangKey } from 'ptz-i18n';

interface Props {
  title?: string;
  description?: string | null;
  image?: string | null;
  article?: boolean;
  datePublished?: string;
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        defaultImage: image
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;

interface QueryProps {
  site: {
    siteMetadata: {
      defaultTitle: string;
      defaultDescription: string;
      siteUrl: string;
      defaultImage: string;
      languages: {
        defaultLangKey: string;
        langs: string[];
      };
    };
  };
}

const RichJson: React.FC<Props> = ({ title, description = null, image = null, datePublished }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery<QueryProps>(query);
  const { langs, defaultLangKey } = site.siteMetadata.languages;

  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);

  const { defaultTitle, defaultDescription, siteUrl, defaultImage } = site.siteMetadata;

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
