import React from 'react';

import LayoutWrapper from '../src/components/LayoutWrapper';
import { withTranslation } from '../src/helpers/i18n';

//@ts-ignore
function About(props) {
  return (
    <LayoutWrapper>
      <h2>
        {props.t('about-title')}
      </h2>
      <div>
        <p>{props.t('about-description-part1')}</p>
      </div>
      <div>
        <p>{props.t('about-description-part2')}</p>
      </div>
    </LayoutWrapper>
  );
}

About.getInitialProps = async() => ({
  namespacesRequired: ['about', 'header'],
})

export default withTranslation('about')(About);