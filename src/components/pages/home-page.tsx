import React, { ReactNode } from "react"
import { Link as ScrollLink } from 'react-scroll';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

// Components
import LayoutWrapper from "../layout-wrapper";
import SEO from '../seo';

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

const HomePage = ({ i18n }: Props) => {
  const { file } = useStaticQuery(query);

  return (
    <>
      <SEO />
      <LayoutWrapper>
        <HomeStyles>
          <div
            className="helloImage"
          >
            <div
              className="oldComputer"
            >
              <p
                className="helloWorld animTyping"
              >
                {i18n.helloWorld}
              </p>
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
          <div
            className="presentationSection"
          >
            <div id="content" style={{ width: 300 }}>
              <Img
                fluid={file.childImageSharp.fixed}
                alt="My picture"
              />
            </div>
            <h1
              className="presentationTitle"
            >
              {i18n.presentation}
            </h1>
          </div>
          <div
            className="presentationContact"
          >
            {i18n.contactMe}
            <Link to="/contact">
              <button
                type="button"
                className="contactButton"
              >
                {i18n.contactButton}
              </button>
            </Link>
          </div>
        </HomeStyles>
      </LayoutWrapper>
    </>
  );
}

export default HomePage;

export const query = graphql`
  query ImageQuery {
    file(relativePath: { eq: "images/gabrielmaia.jpg" }) {
      childImageSharp {
        fixed(width: 270) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;