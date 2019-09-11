// Components
import Header from './Header';

// Assets
import Style from './style.scss';

const Layout = props => (
  <div className={Style.layoutWrapper}>
    <Header />
    {props.children}
  </div>
);

export default Layout;