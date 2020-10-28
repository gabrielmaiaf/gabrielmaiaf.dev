import React, { ReactElement } from 'react';

// Components
import ContactForm from '../contact-form';
import LayoutWrapper from '../layout-wrapper';
import SEO from '../seo';

interface Props {
  i18n: {
    title: string;
    fields: {
      title: string;
      name: string;
      email: string;
      message: string;
      button: string;
    };
  };
}

function ContactPage({ i18n }: Props): ReactElement {
  return (
    <>
      <SEO title={i18n.title} />
      <LayoutWrapper>
        <div className="contactPageContainer">
          <h1>{i18n.title}</h1>
          <ContactForm fields={i18n.fields} />
        </div>
      </LayoutWrapper>
    </>
  );
}

export default ContactPage;
