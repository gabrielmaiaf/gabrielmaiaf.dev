import React, { Fragment } from 'react';

// Components
import HeadComponent from '../src/components/head-component';
import LayoutWrapper from '../src/components/layout-wrapper';
import PortfolioCard from '../src/components/portfolio-card';
import { withTranslation } from '../src/helpers/i18n';

// Images
import WakeCupImg from '../static/images/wakecup_2019.jpg';

type Props = {
  t: (arg0: string) => string;
}

function Contact(props: Props) {
  const renderPortfolio = (title: string, link: string, description: string, year: string, image: string) => {
    return (
      <PortfolioCard
        buttonTranslation={props.t('portfolio:button-visit-site')}
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
        <div>
          {renderPortfolio(
            props.t('portfolio:wakecup.title'),
            props.t('portfolio:wakecup.site'),
            props.t('portfolio:wakecup.description'),
            props.t('portfolio:wakecup.year'),
            WakeCupImg,
          )}
        </div>
      </LayoutWrapper>
    </Fragment>
  );
}

Contact.getInitialProps = async() => ({
  namespacesRequired: ['common', 'portfolio'],
})

export default withTranslation(['common', 'portfolio'])(Contact);