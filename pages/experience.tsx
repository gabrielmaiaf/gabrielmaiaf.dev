import React, { Fragment, ReactElement } from 'react';

// Components
import HeadComponent from '../src/components/HeadComponent';
import LayoutWrapper from '../src/components/LayoutWrapper';
import { withTranslation } from '../src/helpers/i18n';

type Props = {
  t: (arg0: string) => any;
}

function Experience(props: Props) {
  const previouslyJobs = () => {
    const jobs: ReactElement[] = [];
    for (var i=0; i <= 3; i++) {
      jobs.push(
        <div
          key={`sololearn-${i}`}
        >
          <p>{props.t(`previously-job-title${i}`)}</p>
          <p>{props.t(`previously-job-company${i}`)}</p>
          <p>{props.t(`previously-job-time${i}`)}</p>
          <p>{props.t(`previously-job-description${i}`)}</p>
        </div>
      )
    }

    return jobs;
  }

  return (
    <Fragment>
      <HeadComponent
        title={`${props.t('common:title.main')} - ${props.t('common:experience')}`}
      />
      <LayoutWrapper>
        <p>{props.t('experience-title')}</p>
        <div>
          <div>{props.t('actual-job')}</div>
          <p>{props.t('actual-job-title')}</p>
          <p>{props.t('actual-job-company')}</p>
          <p>{props.t('actual-job-time')}</p>
          <p>{props.t('actual-job-description')}</p>
        </div>
        <div>
          <div>{props.t('previous-job')}</div>
          {previouslyJobs()}
        </div>
      </LayoutWrapper>
    </Fragment>
  );
}

Experience.getInitialProps = async() => ({
  namespacesRequired: ['experience', 'common'],
})

export default withTranslation(['experience', 'common'])(Experience);