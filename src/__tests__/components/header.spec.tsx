import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/header';

const MockLangKeys = [
  {
    langKey: 'en',
    selected: true,
    link: '/',
  },
  {
    langKey: 'pt',
    selected: false,
    link: '/pt',
  },
];

describe('Header', () => {
  it('should render header properly', () => {
    const { getByTestId } = render(
      <Header currentLang="en" langs={MockLangKeys} />,
    );

    expect(getByTestId('home-link')).toBeTruthy();
  });

  it('should show text in portuguese when passing pt as a language', () => {
    const { getByTestId } = render(
      <Header currentLang="pt" langs={MockLangKeys} />,
    );

    expect(getByTestId('home-link').textContent).toBe('Início');
  });
});
