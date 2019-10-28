import React, { Fragment, ReactNode } from 'react';

// Components
import HeadComponent from '../src/components/head-component';
import LayoutWrapper from '../src/components/layout-wrapper';
import { withTranslation } from '../src/helpers/i18n';

type Props = {
  t: (arg0: string) => ReactNode;
}

function Contact(props: Props) {
  return (
    <Fragment>
      <HeadComponent
        title={`${props.t('common:title.main')} - Contact`}
      />
      <LayoutWrapper>
        <h2>
          {props.t('portfolio')}
        </h2>
      </LayoutWrapper>
    </Fragment>
  );
}

Contact.getInitialProps = async() => ({
  namespacesRequired: ['common'],
})

export default withTranslation(['common'])(Contact);