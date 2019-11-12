import React, { Fragment } from 'react';

// Components
import HeadComponent from '../src/components/head-component';
import LayoutWrapper from '../src/components/layout-wrapper';
import PortfolioCard from '../src/components/portfolio-card';
import { withTranslation } from '../src/helpers/i18n';

// Images
import WakeCupImg from '../static/images/wakecup_2019.jpg';
import TudusImg from '../static/images/tudus_2019.jpg';
import TudusAppImg from '../static/images/Tudus-app.jpg';

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
        title={`${props.t('common:title.main')} - ${props.t('portfolio:portfolio-title')}`}
      />
      <LayoutWrapper>
        <h2>
          {props.t('portfolio')}
        </h2>
        <div
          className={PageStyles.portfolioWrapper}
        >
          {renderPortfolio(
            props.t('portfolio:wakecup.title'),
            props.t('portfolio:wakecup.site'),
            props.t('portfolio:wakecup.description'),
            props.t('portfolio:wakecup.year'),
            WakeCupImg,
          )}
        </div>
        <div>
          <h3>
            {props.t('portfolio:portfolio-worked-together')}
          </h3>
          <div
            className={PageStyles.portfolioWrapper}
          >
            {renderPortfolio(
              props.t('portfolio:tudus.title'),
              props.t('portfolio:tudus.site'),
              props.t('portfolio:tudus.description'),
              props.t('portfolio:tudus.year'),
              TudusImg,
            )}
            {renderPortfolio(
              props.t('portfolio:tudus-app.title'),
              props.t('portfolio:tudus-app.site'),
              props.t('portfolio:tudus-app.description'),
              props.t('portfolio:tudus-app.year'),
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
  namespacesRequired: ['common', 'portfolio'],
})

export default withTranslation(['common', 'portfolio'])(Contact);