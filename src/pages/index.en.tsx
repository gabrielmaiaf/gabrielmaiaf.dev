import React, { ReactNode } from 'react';

import HomePage from '../components/pages/home-page';

const i18n = {
  programmingTitle: "Programming",
  programmingText: "Self-taught engineer building digital experiences",
  musicTitle: "Music",
  musicText: "Guitarist by heart, finding rhythm in code",
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

export default (): ReactNode => <HomePage i18n={i18n} />;

export function Head() {
  return (
    <meta
      name="google-site-verification"
      content="_zeElUamOQ7NpSQgkhSh6FTbfwl9nSM5E14EfxCfb2A"
    />
  )
}
