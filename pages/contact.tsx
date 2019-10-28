import React, { Fragment, ReactNode } from 'react';

// Components
import HeadComponent from '../src/components/head-component';
import ContactForm from '../src/components/contact-form';
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
          {props.t('contact:contact-title')}
        </h2>
        <ContactForm />
      </LayoutWrapper>
    </Fragment>
  );
}

Contact.getInitialProps = async() => ({
  namespacesRequired: ['common', 'contact'],
})

export default withTranslation(['common'])(Contact);