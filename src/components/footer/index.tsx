import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import FooterWrapper from './styles';

const Footer = () => (
  <FooterWrapper>
    <div className="footerWrapper">
      <div className="footerTitle">
        Links
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/gabrielmaiaf"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/gabrielmaiaf"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://gitlab.com/gabrielmaiaf"
          target="_blank"
          rel="noopener noreferrer"
          className="gitlab"
        >
          <FontAwesomeIcon icon={faGitlab} />
        </a>
        <a
          href="mailto:gabrielmaiaf@outlook.com"
          className="mail"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div>
        Copyright © 2020 Gabriel Maia
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
