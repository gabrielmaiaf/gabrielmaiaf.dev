const website = {
  pathPrefix: `/`,
  url: `https://gabrielmaiaf.dev`,
  title: `Gabriel Maia`,
  titleTemplate: `%s · Gabriel Maia`,
  description: 'My personal website and blog, a place to share my thoughts',
  descriptionPT: 'Meu site e blog pessoal, um lugar para compartilhar meus pensamentos',
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

export default website;
