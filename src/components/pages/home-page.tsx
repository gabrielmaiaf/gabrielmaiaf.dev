import React, { ReactNode } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { StaticImage } from 'gatsby-plugin-image';

// Components
import LayoutWrapper from '../layout-wrapper';
import SEO from '../seo';
import { InternalLink } from '../link';

// Assets
import { HomeStyles } from './page-styles';

interface Props {
  i18n: {
    helloWorld: string;
    presentation: string;
    contactMe: ReactNode;
    contactButton: string;
  };
}

const HomePage: React.FC<Props> = ({ i18n }) => {
  return (
    <>
      <SEO />
      <LayoutWrapper>
        <HomeStyles>
          <div className="helloImage">
            <div className="oldComputer">
              <p className="helloWorld animTyping">{i18n.helloWorld}</p>
            </div>
            <ScrollLink
              to="content"
              className="seeMoreContainer"
              smooth
              duration={1000}
              delay={50}
            >
              <div className="arrow" />
              <div className="arrow" />
              <div className="arrow" />
            </ScrollLink>
          </div>
          <div className="presentationSection">
            <div id="content">
              <StaticImage
                src="../../data/images/gabrielmaia.jpg"
                alt="Gabriel Maia Francisco"
                height={300}
                objectFit="fill"
              />
            </div>
            <h1 className="presentationTitle">{i18n.presentation}</h1>
          </div>
          <div className="presentationContact">
            {i18n.contactMe}
            <InternalLink to="/contact" from="homepage">
              <button type="button" className="contactButton">
                {i18n.contactButton}
              </button>
            </InternalLink>
          </div>
        </HomeStyles>
      </LayoutWrapper>
    </>
  );
};

export default HomePage;
