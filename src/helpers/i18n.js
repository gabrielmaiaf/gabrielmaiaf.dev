const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

// const languages = ['en', 'pt'];

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['pt'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales')
  // localeStructure: '{{lng}}/{{ns}}',
  // localePath: 'public/locales',
  // defaultNS: 'common'
  // preload: ['en', 'pt'],
  // initImmediate: false,
  // lng: 'en'
});

// NextI18NextInstance.i18n.languages = languages;
