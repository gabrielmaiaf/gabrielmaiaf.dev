import React, { ReactElement } from 'react';
import { FormattedDate } from 'react-intl';

interface Props {
  className: string;
  date: string;
}

const Time = (props: Props): ReactElement => {
  const { date } = props;

  return (
    <time {...props} dateTime={date}>
      <FormattedDate
        value={new Date(date)}
        month="long"
        day="numeric"
        year="numeric"
      />
    </time>
  );
};

export default Time;
