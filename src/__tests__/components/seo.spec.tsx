import React from 'react';
import { render } from '@testing-library/react';
import Helmet from 'react-helmet';

import SEO from '../../components/seo';

interface MetaTag {
  name?: string;
  content: string;
  property?: string;
}

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

  it('should render article type when pass article argument', () => {
    const mockTitle = 'Mock page blog · Gabriel Maia';
    render(<SEO title="Mock page blog" article />);

    const { title, metaTags } = Helmet.peek();

    const articleTag = metaTags.filter(
      (tag: MetaTag) => tag.property === 'og:type',
    );

    expect(title).toBe(mockTitle);
    expect(articleTag).toBeTruthy();
  });
});
