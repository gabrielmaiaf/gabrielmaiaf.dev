import React, { ReactNode } from 'react';

// Assets
// Because of a Next error, style is in a JS Object
// import PortfolioCardStyle from './style.scss';

const PortfolioCardStyle = {
  cardContainer: {
    // @include mobile {
    //   margin: 0 auto 40px;
    // }
    maxWidth: '350px',
    margin: '0 20px 40px',
  },
  img: {
    width: '300px',
    border: '1px solid #577E7D',
    borderRadius: '4px',
  },
  cardTitleContainer: {
    display: 'flex',
    // flexDirection: 'row',
    verticalAlign: 'middle',
    justifyContent: 'space-evenly',
    margin: '5px 0',
  },
  title: {
    padding: '3px 0',
    fontWeight: 700,
    margin: 0,
  },
  year: {
    background: '#004C69',
    padding: '3px 9px',
    borderRadius: '14px',
    color: '#fff',
  },
  description: {
    fontSize: '14px',
    margin: 0,
  },
  button: {
    borderRadius: '23px',
    marginTop: '20px',
    width: '90px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    textDecoration: 'none',
    color: '#fff',
    background: '#004C69',
    padding: '10px 20px',
  },
};

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
      style={PortfolioCardStyle.cardContainer}
    >
      <img src={props.image} alt={props.imageAlt} style={PortfolioCardStyle.img} />
      <div style={PortfolioCardStyle.cardTitleContainer}>
        <p style={PortfolioCardStyle.title}>{props.title}</p> <p style={PortfolioCardStyle.year}>{props.year}</p>
      </div>
      <p style={PortfolioCardStyle.description}>{props.description}</p>
      <a href={props.link} target="_blank" style={PortfolioCardStyle.button}>
        {props.buttonTranslation}
      </a>
    </div>
  )
}

export default PortfolioCard;
