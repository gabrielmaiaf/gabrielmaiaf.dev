import React, { Fragment, ReactNode } from 'react';

// Components
import HeadComponent from '../src/components/HeadComponent';
import LayoutWrapper from '../src/components/LayoutWrapper';
import { withTranslation } from '../src/helpers/i18n';

type Props = {
  t: (arg0: string) => ReactNode;
}

function About(props: Props) {
  return (
    <Fragment>
      <HeadComponent
        title={`${props.t('common:title.main')} - ${props.t('common:about')}`}
      />
      <LayoutWrapper>
        <h2>
          {props.t('about-title')}
        </h2>
        <div>
          <p>{props.t('description.part1')}</p>
        </div>
        <div>
          <p>{props.t('description.part2')}</p>
        </div>
        <div>
          {props.t('knowledge-title')}
        </div>
      </LayoutWrapper>
    </Fragment>
  );
}

About.getInitialProps = async() => ({
  namespacesRequired: ['about', 'common'],
})

export default withTranslation(['about', 'common'])(About);