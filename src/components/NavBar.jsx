import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { FaShoppingBag, FaAlignRight } from 'react-icons/fa';
import flyFlowersLogo from '../images/flyFlowersLogo.svg';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { open } = this.state;
    return (
      <nav className={open ? 'navBar open' : 'navBar'}>
        <div className="logoNavBar">
          <Link to="/">
            <img
              className="companyLogo"
              src={flyFlowersLogo}
              alt="Company logo"
            />
          </Link>
          <button
            type="button"
            className="navButton hideHighResolut"
            onClick={this.toggle}
          >
            <FaAlignRight />
          </button>
        </div>
        <div className={open ? 'linksNavBar open' : 'linksNavBar'}>
          <Link
            to={"/shop?occasion=birthday"}
          >
            Birthday
          </Link>
          <Link
            to={"/shop?occasion=love"}
          >
            Love
          </Link>
          <Link
            to={"/shop?occasion=fast+delivery"}
          >
            Fast Delivery
          </Link>
          <Link
            to={"/shop?occasion=decoration"}
          >
            Decoration
          </Link>
          <Link to="/bag">
            <FaShoppingBag />
          </Link>
        </div>

      </nav >
    );
  }
}

export default NavBar;
