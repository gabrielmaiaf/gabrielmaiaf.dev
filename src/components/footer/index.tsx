import React from 'react';
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';

import { OutboundLink } from '../link';

import FooterWrapper from './styles';

const Footer: React.FC = () => (
  <FooterWrapper>
    <div className="footerWrapper" data-testid="footer">
      <div className="footerTitle">Links</div>
      <div className="linksContainer">
        <OutboundLink
          to="https://www.linkedin.com/in/gabrielmaiaf"
          from="footer"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FaLinkedin size={20} />
        </OutboundLink>
        <OutboundLink
          to="https://github.com/gabrielmaiaf"
          from="footer"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <FaGithub size={20} />
        </OutboundLink>
        <OutboundLink
          to="https://gitlab.com/gabrielmaiaf"
          from="footer"
          target="_blank"
          rel="noopener noreferrer"
          className="gitlab"
        >
          <FaGitlab size={20} />
        </OutboundLink>
        {/* <OutboundLink
          to="mailto:mail@gabrielmaia.dev"
          className="mail"
          from="footer"
        >
          <FaEnvelope size={20} />
        </OutboundLink> */}
      </div>
      <div>© 2025 Gabriel Maia. Crafted with Gatsby and fueled by music</div>
    </div>
  </FooterWrapper>
);

export default Footer;
