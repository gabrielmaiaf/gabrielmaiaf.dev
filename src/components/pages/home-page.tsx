import React, { ReactNode } from 'react';
import { Code, Guitar, Music, Headphones } from 'lucide-react';

// Components
import LayoutWrapper from '../layout-wrapper';
import SEO from '../seo';
import { InternalLink } from '../link';

// Assets
import { HomeStyles } from './page-styles';

interface Props {
  i18n: {
    presentation: string;
    contactMe: ReactNode;
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
                  <Headphones className="w-6 h-6 text-cyan-400" />
                  <span className="text-white font-semibold">Currently Listening</span>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-white font-medium">Deep Praise</div>
                  {/* <div className="text-gray-400 text-sm">Perfect for coding sessions</div> */}
                  <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm pt-4">
                  Where faith meets technology, and melodies inspire elegant code solutions.
                </p>
              </div>
            </div>
            </div>
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
