import React, { ReactElement } from 'react';
import { graphql, HeadProps, useStaticQuery } from 'gatsby';
import { getCurrentLangKey } from 'ptz-i18n';

// Components
import ContactPage from '../components/pages/contact-page';
import SEO from '../components/seo';

const i18n = {
  title: 'Contato',
  fields: {
    title: 'Título',
    name: 'Nome',
    email: 'E-mail',
    message: 'Mensagem',
    button: 'Enviar',
  },
};

const Contact = (): ReactElement => <ContactPage i18n={i18n} />;

export default Contact;

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
  const patternTitle = site.siteMetadata.titleTemplate.replace(/%s/, 'Contato')

  return (
    <SEO
      title={patternTitle}
      langKey={langKey}
      siteMetadata={site.siteMetadata}
      pathname={pathname}
    />
  )
}