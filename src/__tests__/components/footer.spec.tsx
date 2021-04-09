import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../components/footer';

jest.mock('polished', () => {
  return {
    shade: jest.fn(),
  };
});

describe('Footer', () => {
  it('should render footer properly', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer')).toBeTruthy();
  });
});
