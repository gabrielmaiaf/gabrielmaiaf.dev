import React from 'react';
import { render } from '@testing-library/react';
import Helmet from 'react-helmet';

import SEO from '../../components/seo';

jest.mock('@reach/router', () => {
  return {
    useLocation: () => ({
      pathname: '',
    }),
  };
});

jest.mock('gatsby', () => {
  return {
    useStaticQuery: () => ({
      site: {
        siteMetadata: {
          defaultTitle: 'Gabriel Maia',
          titleTemplate: '%s · Gabriel Maia',
          defaultDescription: 'Gabriel Maia Francisco, front-end developer',
          siteUrl: 'gabrielmaia.dev',
          defaultImage: 'image.jpg',
          twitterUsername: 'bielmaia',
          languages: {
            defaultLangKey: 'en',
            langs: ['pt', 'en'],
          },
        },
      },
    }),
    graphql: jest.fn(),
  };
});

describe('SEO component', () => {
  it('should render SEO component', () => {
    const mockTitle = 'Mock page · Gabriel Maia';
    render(<SEO title="Mock page" />);

    const { title } = Helmet.peek();

    expect(title).toBe(mockTitle);
  });
});
