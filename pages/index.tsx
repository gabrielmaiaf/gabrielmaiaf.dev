import React, { Fragment, ReactNode } from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { Link as ScrollLink } from 'react-scroll';

// Components
import HeadComponent from '../src/components/head-component';
import LayoutWrapper from '../src/components/layout-wrapper';
import { withTranslation } from '../src/helpers/i18n';

// Assets
import ProfilePic from '../static/images/IMG_20190813_230827_552_2.jpg';
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
            <ScrollLink 
              to="content"
              className={PageStyles.seeMoreContainer}
              smooth
              duration={1000}
              delay={50}
            >
              <div className={PageStyles.arrow} />
              <div className={PageStyles.arrow} />
              <div className={PageStyles.arrow} />
            </ScrollLink>
          </div>
          <div
            className={PageStyles.presentationSection}
          >
            <Fade bottom>
              <div id="content" />
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
