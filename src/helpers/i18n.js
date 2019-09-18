const NextI18Next = require('next-i18next').default;

// const languages = ['en', 'pt'];

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['pt'],
  localeSubpaths: {
    pt: 'pt'
  },
  fallbackLng: 'en',
  preload: ['en'],
  initImmediate: false,
  lng: 'en'
});

// NextI18NextInstance.i18n.languages = languages;
