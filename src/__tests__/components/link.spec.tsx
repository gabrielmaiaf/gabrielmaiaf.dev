import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import GoogleAnalytics from 'react-ga';

import { InternalLink, OutboundLink } from '../../components/link';

describe('Inbound and Outbound links', () => {
  describe('Inbound', () => {
    it('should be able render correctly', () => {
      const { getByText } = render(
        <InternalLink to="/" from="mock">
          Home
        </InternalLink>,
      );

      expect(getByText('Home')).toBeTruthy();
    });
    it('should be able to fire Google Analytics event', () => {
      const { getByText } = render(
        <InternalLink to="/" from="mock">
          Home
        </InternalLink>,
      );

      const GAEvent = jest.spyOn(GoogleAnalytics, 'event');

      const linkElement = getByText('Home');

      fireEvent.click(linkElement);

      expect(GAEvent).toBeCalledWith({
        category: 'Link',
        action: `[clicked] mock`,
        label: '/',
      });
    });
  });
  describe('Outbound', () => {
    it('should be able render correctly', () => {
      const { getByText } = render(
        <OutboundLink to="www.google.com.br" from="mock">
          Home
        </OutboundLink>,
      );

      expect(getByText('Home')).toBeTruthy();
    });
    it('should be able to fire Google Analytics event', () => {
      const { getByText } = render(
        <OutboundLink to="www.google.com.br" from="mock">
          Home
        </OutboundLink>,
      );

      const GAEvent = jest.spyOn(GoogleAnalytics, 'event');

      const linkElement = getByText('Home');

      fireEvent.click(linkElement);

      expect(GAEvent).toBeCalledWith({
        category: 'Outbound Link',
        action: `[clicked] mock`,
        label: 'www.google.com.br',
      });
    });
  });
});
