import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';

import FooterWrapper from './styles';

const Footer: React.FC = () => (
  <FooterWrapper>
    <div className="footerWrapper">
      <div className="footerTitle">Links</div>
      <div className="linksContainer">
        <a
          href="https://www.linkedin.com/in/gabrielmaiaf"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/gabrielmaiaf"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://gitlab.com/gabrielmaiaf"
          target="_blank"
          rel="noopener noreferrer"
          className="gitlab"
        >
          <FaGitlab size={20} />
        </a>
        <a href="mailto:gabrielmaiaf@outlook.com" className="mail">
          <FaEnvelope size={20} />
        </a>
      </div>
      <div>Copyright © 2020 Gabriel Maia</div>
    </div>
  </FooterWrapper>
);

export default Footer;
