import React, { Fragment, ReactNode } from 'react';

// Components
import HeadComponent from '../src/components/HeadComponent';
import LayoutWrapper from '../src/components/LayoutWrapper';
import { withTranslation } from '../src/helpers/i18n';

type Props = {
  t: (arg0: string) => ReactNode;
}

function Experience(props: Props) {
  return (
    <Fragment>
      <HeadComponent
        title="Gabriel Maia - Experiencia"
      />
      <LayoutWrapper>
        <p>{props.t('experience-title')}</p>
      </LayoutWrapper>
    </Fragment>
  );
}

Experience.getInitialProps = async() => ({
  namespacesRequired: ['experience', 'header'],
})

export default withTranslation('experience')(Experience);