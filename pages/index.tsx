import React, { Fragment, ReactNode } from 'react';
import Link from 'next/link';
// @ts-ignore
import Fade from 'react-reveal/Fade';

// Components
import HeadComponent from '../src/components/HeadComponent';
import LayoutWrapper from '../src/components/LayoutWrapper';
import { withTranslation } from '../src/helpers/i18n';

// Assets
// @ts-ignore
import ProfilePic from '../static/images/IMG_20190813_230827_552_2.jpg';
// @ts-ignore
import PageStyles from '../src/pageStyles.scss';

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
          <div
            className={PageStyles.presentationSection}
          >
            <Fade bottom>
              <img src={ProfilePic} alt="My picture" />
              <h1
                className={PageStyles.presentationTitle}
              >
                {props.t('presentation')}
              </h1>
            </Fade>
          </div>
          <div
            className={PageStyles.presentationContact}
          >
            <Fade bottom>
            <h2>
              {props.t('contact-hook')}
            </h2>
            <p>
              {props.t('contact-text')}
            </p>
            <Link href="/contact">
              <button
                type="button"
                className={PageStyles.contactButton}
              >
                {props.t('contact-button')}
              </button>
            </Link>
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
