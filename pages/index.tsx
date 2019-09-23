import React, { Fragment } from 'react';

// Components
import HeadComponent from '../src/components/HeadComponent';
import LayoutWrapper from '../src/components/LayoutWrapper';
import { withTranslation } from '../src/helpers/i18n';

// Assets
// @ts-ignore
import PageStyles from '../src/pageStyles.scss';

type Props = {
  t: (arg0: string) => any;
}

function Index(props: Props) {
  return (
    <Fragment>
      <HeadComponent
        title={props.t('common:title.main')}
      />
      <LayoutWrapper>
        <div>
          <div
            className={PageStyles.helloImage}
          >
            <div
              className={PageStyles.oldComputer}
            >
              <p
                className={`${PageStyles.helloWorld} ${PageStyles.animTyping}`}
              >
                {props.t('hello-world')}
              </p>
            </div>
          </div>
          <h1>
            {props.t('presentation')}
          </h1>
        </div>
      </LayoutWrapper>
    </Fragment>
  );
};

Index.getInitialProps = async() => ({
  namespacesRequired: ['main', 'common'],
})

export default withTranslation(['main', 'common'])(Index);
