import React from 'react';
import { graphql, HeadProps, useStaticQuery } from 'gatsby';
import { getCurrentLangKey } from 'ptz-i18n';
import HomePage from '../components/pages/home-page';
import SEO from '../components/seo';

const i18n = {
  programmingTitle: "Programação",
  programmingText: "Engenheiro de software auto didata construindo experiências digitais",
  musicTitle: "Música",
  musicText: "Guitarista de coração, buscando o ritmo no código",
  presentation:
    "Sou Gabriel - seguidor de Cristo, marido dedicado e um pai orgulhoso. Sou um engenheiro de software auto didata, um projetista mecânico de formação e guitarrista de coração (mas não garanto que esteja sempre afinado!)",
  contactTitle: "Vamos criar algo incrível juntos",
  contactCallToAction: 'Seja discutir um projeto, compartilhar grandes músicas ou conversar sobre Cristo',
  contactButton: 'Entre em contato',
};

export default (): JSX.Element => <HomePage i18n={i18n} />;

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
