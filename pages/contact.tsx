import React, { Fragment, ReactNode } from 'react';

// Components
import HeadComponent from '../src/components/HeadComponent';
import ContactForm from '../src/components/ContactForm';
import LayoutWrapper from '../src/components/LayoutWrapper';
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
          {props.t('about-title')}
        </h2>
        <ContactForm />
      </LayoutWrapper>
    </Fragment>
  );
}

Contact.getInitialProps = async() => ({
  namespacesRequired: ['common'],
})

export default withTranslation(['common'])(Contact);