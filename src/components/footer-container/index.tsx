import React, { PureComponent } from 'react';
import Fade from 'react-reveal/Fade';

// Assets
import StylesFooter from './style.scss';

class Footer extends PureComponent {
  public render() {
    return (
      <footer
        className={StylesFooter.footerContainer}
      >
        <div
          className={StylesFooter.footerWrapper}
        >
          <Fade bottom>
            <div
              className={StylesFooter.footerTitle}
            >
              Links
            </div>
            <div>
              <a
                href="https://br.linkedin.com/in/gabrielmaiaf"
                target="_blank"
                className={StylesFooter.linkedin}
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://github.com/gabrielmaiaf/"
                target="_blank"
                className={StylesFooter.github}
              >
                <i className="fab fa-github" />
              </a>
              {/* <a href="https://br.linkedin.com/in/gabrielmaiaf" target="_blank">
                <i className="fab fa-twitter" />
              </a> */}
              <a
                href="mailto:gabrielmaiaf@outlook.com"
                target="_blank"
                className={StylesFooter.mail}
              >
                <i className="fas fa-envelope" />
              </a>
            </div>
            <div>
              Copyright © 2019 Gabriel Maia
            </div>
          </Fade>
        </div>
      </footer>
    );
  }
}

export default Footer;