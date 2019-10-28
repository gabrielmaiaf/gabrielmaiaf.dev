import React from 'react';

// @ts-ignore
import StyleCard from './style.scss';

type Props = {
  concluded: string;
  title: string;
}

function CourseCard(props: Props) {
  return (
    <div
      className={StyleCard.cardContainer}
    >
      <p>{props.title}</p>
      <p>{props.concluded}</p>
    </div>
  );
}

export default CourseCard;
