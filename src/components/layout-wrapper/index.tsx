import React from 'react';

// Components
import Header from '../header-container';
import Footer from '../footer-container';

// Assets
import Style from './style.module.scss';

interface Props {
  children: any;
}

const LayoutWrapper = (props: Props) => (
  <div className={Style.layoutWrapper}>
    <Header />
    <div
      className={Style.layoutPageContainer}
    >
      {props.children}
    </div>
    <Footer />
  </div>
);

export default LayoutWrapper;