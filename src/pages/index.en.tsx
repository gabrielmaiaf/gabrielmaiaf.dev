import React, { ReactNode } from 'react';
import { graphql, HeadProps, useStaticQuery } from 'gatsby';
import { getCurrentLangKey } from 'ptz-i18n';
import HomePage from '../components/pages/home-page';
import SEO from '../components/seo';

const i18n = {
  programmingTitle: "Programming",
  programmingText: "Self-taught engineer building digital experiences",
  musicTitle: "Music",
  musicText: "Guitarist by heart, finding rhythm in code",
  presentation:
    "I'm Gabriel - a follower of Christ, devoted husband and proud father. I'm a self-taught software engineer, a mechanical designer by education and a guitarrist by heart (though I can't always promise perfect tuning!)",
  contactTitle: "Let's create something amazing together",
  contactCallToAction: 'Whether you want to discuss a project, share great songs or talk about Christ',
  contactButton: 'Get in touch',
};

export default (): ReactNode => <HomePage i18n={i18n} />;

export function Head({ location }: HeadProps) {
  const { pathname } = location;
  const { site } = useStaticQuery(graphql`
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
  `);

  const { langs, defaultLangKey } = site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);

  return (
    <SEO
      langKey={langKey}
      siteMetadata={site.siteMetadata}
      pathname={pathname}
    />
  )
}