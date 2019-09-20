import React, { Fragment, ReactElement } from 'react';

// Components
import CourseCard from '../src/components/CourseCard';
import HeadComponent from '../src/components/HeadComponent';
import LayoutWrapper from '../src/components/LayoutWrapper';
import { withTranslation } from '../src/helpers/i18n';

// Assets
// @ts-ignore
import PageStyles from '../src/pageStyles.scss';

type Props = {
  t: (arg0: string) => any;
}

function Scholarity(props: Props) {
  const complementarySololearnCourses = () => {
    const courses: ReactElement[] = [];
    for (var i=0; i <= 6; i++) {
      courses.push(
        <CourseCard
          key={`sololearn-${i}`}
          title={props.t(`complementary-sololearn.name${i}`)}
          concluded={props.t(`complementary-sololearn.finishedAt${i}`)}
        />
      )
    }

    return courses;
  }

  const complementaryCodecademyCourses = () => {
    const courses: ReactElement[] = [];
    for (var i=0; i <= 6; i++) {
      courses.push(
        <CourseCard
          key={`codecademy-${i}`}
          title={props.t(`complementary-codecademy.name${i}`)}
          concluded={props.t(`complementary-codecademy.finishedAt${i}`)}
        />
      )
    }

    return courses;
  }

  return (
    <Fragment>
      <HeadComponent
        title={`${props.t('common:title.main')} - ${props.t('common:scholarity')}`}
      />
      <LayoutWrapper>
        <h2>{props.t('scholarity-title')}</h2>
        <div>
          <p>{props.t('complementary-sololearn.title')}</p>
          <div
            className={PageStyles.courseContainer}
          >
            {complementarySololearnCourses()}
          </div>
        </div>
        <div>
          <p>{props.t('complementary-codecademy.title')}</p>
          <div
            className={PageStyles.courseContainer}
          >
            {complementaryCodecademyCourses()}
          </div>
        </div>
      </LayoutWrapper>
    </Fragment>
  );
}

Scholarity.getInitialProps = async() => ({
  namespacesRequired: ['scholarity', 'common'],
})

export default withTranslation(['scholarity', 'common'])(Scholarity);