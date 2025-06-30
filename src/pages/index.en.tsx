import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import HomePage from '../components/pages/home-page';

const i18n = {
  helloWorld: 'Hello, World!',
  presentation:
    "I'm Gabriel - a follower of Christ, devoted husband and proud father. I'm a self-taught software engineer, a mechanical designer by education and a guitarrist by heart (though I can't always promise perfect tuning!)",
  contactMe: (
    <>
      <h2>Interested in hire me or build a project together?</h2>
      <p>
        If you have an application interested in developing or a problem that
        you need to be solved, let&rsquo;s talk!
      </p>
    </>
  ),
  contactButton: 'Get in touch',
};

export default (): ReactNode => (
  <>
    <Helmet>
      <meta
        name="google-site-verification"
        content="_zeElUamOQ7NpSQgkhSh6FTbfwl9nSM5E14EfxCfb2A"
      />
    </Helmet>
    <HomePage i18n={i18n} />
  </>
);
