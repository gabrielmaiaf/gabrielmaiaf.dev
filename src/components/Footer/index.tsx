import React, { PureComponent } from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';

// Assets
// @ts-ignore
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
              <a href="https://br.linkedin.com/in/gabrielmaiaf" target="_blank">
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://github.com/gabrielmaiaf/" target="_blank">
                <i className="fab fa-github" />
              </a>
              {/* <a href="https://br.linkedin.com/in/gabrielmaiaf" target="_blank">
                <i className="fab fa-twitter" />
              </a> */}
              <a href="mailto:gabrielmaiaf@outlook.com" target="_blank">
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