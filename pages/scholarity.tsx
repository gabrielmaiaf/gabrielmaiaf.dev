import React, { Fragment, ReactNode } from 'react';

// Components
import HeadComponent from '../src/components/HeadComponent';
import LayoutWrapper from '../src/components/LayoutWrapper';
import { withTranslation } from '../src/helpers/i18n';

type Props = {
  t: (arg0: string) => ReactNode;
}

function Scholarity(props: Props) {
  return (
    <Fragment>
      <HeadComponent
        title="Gabriel Maia - Escolaridade"
      />
      <LayoutWrapper>
        <p>{props.t('scholarity-title')}</p>
      </LayoutWrapper>
    </Fragment>
  );
}

Scholarity.getInitialProps = async() => ({
  namespacesRequired: ['scholarity', 'header'],
})

export default withTranslation('scholarity')(Scholarity);