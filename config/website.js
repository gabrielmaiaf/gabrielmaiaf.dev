module.exports = {
  pathPrefix: `/`,
  url: `https://gabrielmaia.dev`,
  title: `Gabriel Maia`,
  titleTemplate: `%s · Gabriel Maia`,
  description: 'My personal blog, to help anyone with doubts in development',
  descriptionPT:
    'Meu blog pessoal, para ajudar qualquer um que tenha dúvidas em desenvolvimento',
  image: `/images/gabrielmaiaf.jpeg`, // Path to the default meta image in `static` folder
  siteLanguage: `en`, // Language tag on <html> element

  // Web App Manifest
  favicon: `src/assets/images/favicon.png`, // Used for manifest favicon generation
  shortName: `GabrielMaia`, // shortname for manifest. *Must* be shorter than 12 characters
  themeColor: `#172237`,
  backgroundColor: `#F3F9FF`,

  // schema.org JSONLD
  headline: 'My personal website and my blog',
  author: 'Gabriel Maia Francisco',

  // Google & Twitter
  googleAnalyticsId: `UA-152430923-1`, // Google Analytics ID
  twitter: `@_bielmaia`, // Twitter username
};
