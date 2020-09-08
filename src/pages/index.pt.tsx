import React from 'react';

import HomePage from '../components/pages/home-page';

const i18n = {
  helloWorld: 'Hello, World!',
  presentation:
    'Eu sou Gabriel, desenvolvedor front-end e mobile híbrido, usando React para a web e React Native para Android e iOS.',
  contactMe: (
    <>
      <h2>Interessado em contratar-me ou construir um projeto juntos?</h2>
      <p>
        Se você tem uma aplicação para desenvolver ou um problema para ser
        solucionado, vamos conversar!
      </p>
    </>
  ),
  contactButton: 'Entre em contato',
};

export default (): JSX.Element => <HomePage i18n={i18n} />;
