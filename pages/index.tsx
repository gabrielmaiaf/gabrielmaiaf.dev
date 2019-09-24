import React, { Fragment, ReactNode } from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';

// Components
import HeadComponent from '../src/components/HeadComponent';
import LayoutWrapper from '../src/components/LayoutWrapper';
import { withTranslation } from '../src/helpers/i18n';

// Assets
// @ts-ignore
import IndexStyles from '../src/indexStyles.scss';

type Props = {
  t: (translationKey: string) => ReactNode;
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
            className={IndexStyles.helloImage}
          >
            <div
              className={IndexStyles.oldComputer}
            >
              <p
                className={`${IndexStyles.helloWorld} ${IndexStyles.animTyping}`}
              >
                {props.t('hello-world')}
              </p>
            </div>
          </div>
          <div
            className={IndexStyles.presentationSection}
          >
            <Fade bottom>
              <h1
                className={IndexStyles.presentationTitle}
              >
                {props.t('presentation')}
              </h1>
            </Fade>
          </div>
        </div>
      </LayoutWrapper>
    </Fragment>
  );
};

Index.getInitialProps = async() => ({
  namespacesRequired: ['main', 'common'],
})

export default withTranslation(['main', 'common'])(Index);
