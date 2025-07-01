import React from 'react';

import HomePage from '../components/pages/home-page';

const i18n = {
  programmingTitle: "Programação",
  programmingText: "Engenheiro de software auto didata construindo experiências digitais",
  musicTitle: "Música",
  musicText: "Guitarista de coração, buscando o ritmo no código",
  presentation:
    "Sou Gabriel - seguidor de Cristo, marido dedicado e um pai orgulhoso. Sou um engenheiro de software auto didata, um projetista mecânico de formação e guitarrista de coração (mas não garanto que esteja sempre afinado!)",
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
