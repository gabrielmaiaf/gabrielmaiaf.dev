import React from 'react';

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

const ContactPage: React.FC<Props> = ({ i18n }) => {
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
};

export default ContactPage;
