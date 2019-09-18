import React from 'react';

type Props = {
  concluded: string;
  title: string;
}

function CourseCard(props: Props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.concluded}</p>
    </div>
  );
}

export default CourseCard;
