import React, { ReactElement } from 'react';

// Components
import ContactPage from '../components/pages/contact-page';

const i18n = {
  title: 'Contato',
  fields: {
    title: 'Título',
    name: 'Nome',
    email: 'E-mail',
    message: 'Mensagem',
    button: 'Enviar',
  },
};

const Contact = (): ReactElement => <ContactPage i18n={i18n} />;

export default Contact;
