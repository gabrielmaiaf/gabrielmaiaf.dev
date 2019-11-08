import React, { ReactNode } from 'react';

// Assets
import PortfolioCardStyle from './style.scss';

type Props = {
  buttonTranslation: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  title: string;
  year: string;
}

function PortfolioCard(props: Props) {
  return (
    <div
      className={PortfolioCardStyle.cardContainer}
    >
      <img src={props.image} alt={props.imageAlt} />
      <div className={PortfolioCardStyle.cardTitleContainer}>
        <p>{props.title}</p> <p>{props.year}</p>
      </div>
      <p>{props.description}</p>
      <a href={props.link} target="_blank">
        {props.buttonTranslation}
      </a>
    </div>
  )
}

export default PortfolioCard;
