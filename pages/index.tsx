import React, { Fragment, ReactNode } from 'react';

// Components
import HeadComponent from '../src/components/HeadComponent';
import LayoutWrapper from '../src/components/LayoutWrapper';
import { withTranslation } from '../src/helpers/i18n';

type Props = {
  t: (arg0: string) => ReactNode;
}

function Index(props: Props) {
  return (
    <Fragment>
      <HeadComponent
        title="Gabriel Maia"
      />
      <LayoutWrapper>
        <div>
          <p>{props.t('hello-world')}</p>
          <h1>
            {props.t('presentation')}
          </h1>
        </div>
      </LayoutWrapper>
    </Fragment>
  );
};

Index.getInitialProps = async() => ({
  namespacesRequired: ['common', 'header'],
})

export default withTranslation('common')(Index);
