import React from 'react';
import { Code, Guitar, Music, Headphones, ExternalLink } from 'lucide-react';

// Components
import LayoutWrapper from '../layout-wrapper';
import SEO from '../seo';
import { OutboundLink } from '../link';

// Assets
import { HomeStyles } from './page-styles';

interface Props {
  i18n: {
    presentation: string;
    contactTitle: string;
    contactCallToAction: string;
    contactButton: string;
    programmingTitle: string;
    programmingText: string;
    musicTitle: string;
    musicText: string;
  };
}

const HomePage: React.FC<Props> = ({ i18n }) => {
  return (
    <>
      <SEO />
      <LayoutWrapper>
        <HomeStyles>
          <div className='hero-wrapper'>
          <div className="hero-icon-wrapper flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="hero-icon-container programming-icon p-3 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30">
              <Code />
            </div>
            <div className="hero-icon-container music-icon">
              <Music  />
            </div>
            <div className="hero-icon-container headphones-icon">
              <Headphones />
            </div>
            <div className="hero-icon-container cross-icon">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <rect x="10" y="2" width="4" height="24" fill='currentColor' />
                <rect x="3" y="9" width="18" height="4" fill='currentColor' />
              </svg>
            </div>
            <div className="hero-icon-container guitar-icon">
              <Guitar />
            </div>
          </div>

            <h1>Gabriel Maia</h1>
            <div className='hero-description'>
              <p className='presentation'>
                {i18n.presentation}
              </p>
              <div className="hero-widget-container">
                <div className="hero-widget-left-container">
                  <div className="programmer-widget">
                    <Code />
                    <h3>{i18n.programmingTitle}</h3>
                    <p>{i18n.programmingText}</p>
                  </div>
                  
                  <div className="music-widget">
                    <Guitar />
                    <h3>{i18n.musicTitle}</h3>
                    <p>{i18n.musicText}</p>
                  </div>
                </div>

              <div className="hero-widget-right">
                <div className="listening-title">
                  <Headphones />
                  <span className="text-white font-semibold">Currently Listening</span>
                </div>
                <div className="mini-player">
                  <div className="text-white font-medium">
                    <OutboundLink
                      to="https://open.spotify.com/playlist/4vmdqA3RoN5vWeHZZAKb3c?si=e54bea5d1cf04c96"
                      from='homepage'
                    >
                      Deep Praise <ExternalLink />
                    </OutboundLink>
                    </div>
                  <div className="spotify-progress-bar">
                    <div className="spotify-progress"></div>
                  </div>
                </div>
                
                <p>
                  Where faith meets technology, and melodies inspire elegant code solutions.
                </p>
              </div>
            </div>
            </div>
          </div>
          <div className="presentationContact">
            <h3>
              {i18n.contactTitle}
            </h3>
            <p>
              {i18n.contactCallToAction}
            </p>
            <OutboundLink to="https://www.linkedin.com/in/gabrielmaiaf" from="homepage">
              <button type="button" className="contactButton">
                {i18n.contactButton}
              </button>
            </OutboundLink>
          </div>
        </HomeStyles>
      </LayoutWrapper>
    </>
  );
};

export default HomePage;
