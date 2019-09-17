import React, { Fragment, ReactNode } from 'react';

// Components
import HeadComponent from '../src/components/HeadComponent';
import LayoutWrapper from '../src/components/LayoutWrapper';
import { withTranslation } from '../src/helpers/i18n';

type Props = {
  t: (arg0: string) => ReactNode;
}

function About(props: Props) {
  return (
    <Fragment>
      <HeadComponent
        title="Gabriel Maia - Sobre mim"
      />
      <LayoutWrapper>
        <h2>
          {props.t('about-title')}
        </h2>
        <div>
          <p>{props.t('about-description-part1')}</p>
        </div>
        <div>
          <p>{props.t('about-description-part2')}</p>
        </div>
        <div>
          Knowledge
        </div>
      </LayoutWrapper>
    </Fragment>
  );
}

About.getInitialProps = async() => ({
  namespacesRequired: ['about', 'header'],
})

export default withTranslation('about')(About);