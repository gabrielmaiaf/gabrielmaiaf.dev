const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const languages = ['en', 'pt'];

const nextConfig = {
  publicRuntimeConfig: {
    localeSubpaths: process.env.LOCALE_SUBPATHS === 'true',    
  },
  webpack(config, options) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    // NextJS polyfill example (https://github.com/zeit/next.js/tree/canary/examples/with-polyfills)
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js'] && !entries['main.js'].includes('./src/polyfills.js'))
        entries['main.js'].unshift('./src/polyfills.js');

      return entries;
    };

    return config;
  }
};

module.exports = (phase, { defaultConfig }) => withImages(withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]__[hash:base64:5]"
    },
    exportPathMap: (defaultConfig) => {
      const pathMap = {};

      Object.entries(defaultConfig).forEach(([key, value]) => {
        pathMap[key] = value;

        languages.forEach(lang => {
          pathMap[`/${lang}${key}`] = { ...value, query: { lang }};
        });
      });

      return pathMap;
    },
  }),
  nextConfig
);
