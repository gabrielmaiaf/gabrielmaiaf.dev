import React, { ReactNode } from 'react';
import { Code, Guitar, Music, Headphones } from 'lucide-react';
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
          <div className='hero-wrapper'>
          <div className="hero-icon-wrapper flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="hero-icon-container programming-icon p-3 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30">
              <Code className="w-8 h-8 text-blue-400" />
            </div>
            <div className="p-3 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30">
              <Music className="w-8 h-8 text-purple-400" />
            </div>
            <div className="p-3 bg-cyan-500/20 rounded-full backdrop-blur-sm border border-cyan-500/30">
              <Headphones className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="p-3 bg-red-500/20 rounded-full backdrop-blur-sm border border-red-500/30">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute w-6 h-1 bg-red-400 rounded"></div>
                <div className="absolute w-1 h-6 bg-red-400 rounded"></div>
              </div>
            </div>
            <div className="p-3 bg-orange-500/20 rounded-full backdrop-blur-sm border border-orange-500/30">
              <Guitar className="w-8 h-8 text-orange-400" />
            </div>
          </div>

            <h1>Gabriel Maia</h1>
            <div className='hero-description'>
              <p className='presentation'>
                {i18n.presentation}
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-4 rounded-lg border border-blue-500/20">
                    <Code className="w-8 h-8 text-blue-400 mb-3" />
                    <h3 className="text-white font-semibold mb-2">Programming</h3>
                    <p className="text-gray-400 text-sm">Self-taught engineer building digital experiences</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-4 rounded-lg border border-purple-500/20">
                    <Guitar className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="text-white font-semibold mb-2">Music</h3>
                    <p className="text-gray-400 text-sm">Guitarist at heart, finding rhythm in code</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-8 rounded-2xl border border-slate-600">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Headphones className="w-6 h-6 text-cyan-400" />
                      <span className="text-white font-semibold">Currently Listening</span>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <div className="text-white font-medium">Worship & Code Mix</div>
                      <div className="text-gray-400 text-sm">Perfect for coding sessions</div>
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
            </div>
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
