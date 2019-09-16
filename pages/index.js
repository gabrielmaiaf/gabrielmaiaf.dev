import React from 'react';

// Components
import LayoutWrapper from '../src/components/LayoutWrapper';
import { withTranslation } from '../src/helpers/i18n';

// @ts-ignore
const Index = (props) => {
  return (
    <LayoutWrapper>
      <div>
        <p>{props.t('hello-world')}</p>
        <h1>
          {props.t('presentation')}
        </h1>
      </div>
    </LayoutWrapper>
  );
};

Index.getInitialProps = async() => ({
  namespacesRequired: ['common', 'header'],
})

export default withTranslation('common')(Index);
