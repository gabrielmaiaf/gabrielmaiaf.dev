const { nextI18NextRewrites } = require('next-i18next/rewrites');
const withImages = require('next-images');
const languages = ['en', 'pt'];
const prod = process.env.NODE_ENV === 'production';

const localeSubpaths = {
  pt: 'pt'
};

module.exports = withImages({
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  }
})
