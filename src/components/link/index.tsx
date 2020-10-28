import React, { AnchorHTMLAttributes } from 'react';
import GoogleAnalytics from 'react-ga';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
// import { LinkWrapper } from './styles'; /* eslint-disable-line import/no-unresolved */

interface IntProps
  extends Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'> {
  to: string;
  from: string;
}

interface OutProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  from: string;
}

export const InternalLink: React.FC<IntProps> = ({
  to,
  from,
  children,
  ...rest
}) => (
  <GatsbyLink
    to={to}
    onClick={() => {
      GoogleAnalytics.event({
        category: 'Link',
        action: `[clicked] ${from}`,
        label: to,
      });
    }}
    {...rest}
  >
    {children}
  </GatsbyLink>
);

export const OutboundLink: React.FC<OutProps> = ({
  to,
  from,
  children,
  ...rest
}) => (
  <a
    href={to}
    rel="noopener noreferrer"
    onClick={() => {
      GoogleAnalytics.event({
        category: 'Outbound Link',
        action: `[clicked] ${from}`,
        label: to,
      });
    }}
    {...rest}
  >
    {children}
  </a>
);
