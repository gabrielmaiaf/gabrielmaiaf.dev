import React, { Fragment } from 'react';

// Components
import HeadComponent from '../src/components/head-component';
import LayoutWrapper from '../src/components/layout-wrapper';
import PortfolioCard from '../src/components/portfolio-card';
import { withTranslation } from '../src/helpers/i18n';

// Images
import WakeCupImg from '../public/images/wakecup_2019.jpg';
import TudusImg from '../public/images/tudus_2019.jpg';
import TudusAppImg from '../public/images/Tudus-app.jpg';

// Assets
import PageStyles from '../src/pageStyles.scss';

type Props = {
  t: (arg0: string) => string;
}

function Contact(props: Props) {
  const renderPortfolio = (title: string, link: string, description: string, year: string, image: string, target = 'web') => {
    let translation = props.t('portfolio:button-visit-site');
    if (target === 'android')
      translation = props.t('portfolio:button-visit-store');
    return (
      <PortfolioCard
        buttonTranslation={translation}
        description={description}
        image={image}
        imageAlt={title}
        link={link}
        title={title}
        year={year}
      />
    );
  }

  return (
    <Fragment>
      <HeadComponent
        title={`${props.t('common:title.main')} - ${props.t('portfolio-title')}`}
      />
      <LayoutWrapper>
        <h2>
          {props.t('portfolio-title')}
        </h2>
        <div
          className={PageStyles.portfolioWrapper}
        >
          {renderPortfolio(
            props.t('wakecup.title'),
            props.t('wakecup.site'),
            props.t('wakecup.description'),
            props.t('wakecup.year'),
            WakeCupImg,
          )}
        </div>
        <div>
          <h3>
            {props.t('portfolio-worked-together')}
          </h3>
          <div
            className={PageStyles.portfolioWrapper}
          >
            {renderPortfolio(
              props.t('tudus.title'),
              props.t('tudus.site'),
              props.t('tudus.description'),
              props.t('tudus.year'),
              TudusImg,
            )}
            {renderPortfolio(
              props.t('tudus-app.title'),
              props.t('tudus-app.site'),
              props.t('tudus-app.description'),
              props.t('tudus-app.year'),
              TudusAppImg,
              'android'
            )}
          </div>
        </div>
      </LayoutWrapper>
    </Fragment>
  );
}

Contact.getInitialProps = async() => ({
  namespacesRequired: ['portfolio', 'common'],
})

export default withTranslation(['portfolio', 'common'])(Contact);