import React, { ReactElement } from 'react';

// Components
import ContactPage from '../components/pages/contact-page';

const i18n = {
  title: 'Contact',
  fields: {
    title: 'Title',
    name: 'Name',
    email: 'E-mail',
    message: 'Message',
    button: 'Send',
  },
};

const Contact = (): ReactElement => <ContactPage i18n={i18n} />;

export default Contact;
