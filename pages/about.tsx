import React, { Fragment, ReactNode } from 'react';
// @ts-ignore
import { TagCloud } from 'react-tagcloud';
import Fade from 'react-reveal/Fade';

// Components
import HeadComponent from '../src/components/head-component';
import LayoutWrapper from '../src/components/layout-wrapper';
import { withTranslation } from '../src/helpers/i18n';

import PageStyles from '../src/pageStyles.scss';

type CloudData = {
  value: string;
  count: number;
}

type Props = {
  t: (arg0: string) => ReactNode;
}

function About(props: Props) {
  const TagCloudData: CloudData[] = [
    { value: 'JavaScript', count: 23 },
    { value: 'React', count: 25 },
    { value: 'React Native', count: 24 },
    { value: 'Redux', count: 20 },
    { value: 'Expo', count: 20 },
    { value: 'Python', count: 15 },
    { value: 'C#', count: 15 },
    { value: 'Node', count: 19 },
    { value: 'Next.js', count: 21 },
    { value: 'Webpack', count: 22 },
    { value: 'SASS', count: 17 },
    { value: 'CSS', count: 16 },
    { value: 'LESS', count: 15 },
    { value: 'JSS', count: 21 },
    { value: 'Linux', count: 23 },
  ];

  return (
    <Fragment>
      <HeadComponent
        title={`${props.t('common:title.main')} - ${props.t('common:about')}`}
      />
      <LayoutWrapper>
        <h2>
          {props.t('about-title')}
        </h2>
        <div
          className={PageStyles.descriptionWrapper}
        >
          <p>{props.t('description.part1')}</p>
          <p>{props.t('description.part2')}</p>
        </div>
        <div>
          <h3>
            {props.t('knowledge-title')}
          </h3>
          <Fade bottom>
            <div
              className={PageStyles.tagCloud}
            >
            <TagCloud
              minSize={15}
              maxSize={25}
              tags={TagCloudData}
              shuffle={true}
            />
            </div>
          </Fade>
        </div>
      </LayoutWrapper>
    </Fragment>
  );
}

About.getInitialProps = async() => ({
  namespacesRequired: ['about', 'common'],
})

export default withTranslation(['about', 'common'])(About);