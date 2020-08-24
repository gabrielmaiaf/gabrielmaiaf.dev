import React from 'react';

// Components
import ContactForm from '../components/contact-form';
import LayoutWrapper from '../components/layout-wrapper';

function Contact() {
  return (
    <LayoutWrapper>
      <h2>
        Contact
      </h2>
      <ContactForm />
    </LayoutWrapper>
  );
}

export default Contact;