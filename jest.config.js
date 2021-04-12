module.exports = {
  collectCoverageFrom: [
    'src/components/**/*.tsx',
    'src/helpers/**/*.ts',
    '!src/helpers/styles/*',
    '!src/components/layout-wrapper/*.tsx',
    '!src/components/pages/*.tsx',
  ],
  transform: {
    '^.+\\.[jt]sx?$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': `<rootDir>/src/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `config`,
    `<rootDir>.*/@types`,
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
