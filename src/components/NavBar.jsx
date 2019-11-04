import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <nav className={open ? "navBar open" : "navBar"}>
        <div className="logoNavBar">
          <NavLink to="/">
            <img className="companyLogo"
              src={flyFlowersLogo}
              alt="Company logo" />
          </NavLink>
          <button
            type="button"
            className="navButton hideHighResolut"
            onClick={this.toggle}
          >
            <FaAlignRight />
          </button>
        </div>
        <div className={open ? "linksNavBar open" : "linksNavBar"}>
          <NavLink
            to={{
              pathname: '/shop',
              filter: 'birthday',
            }}>
            Birthday
        </NavLink>
          <NavLink
            to={{
              pathname: '/shop',
              filter: 'love',
            }}
          >
            Love
          </NavLink>
          <NavLink
            to={{
              pathname: '/shop',
              filter: 'fast delivery',
            }}>
            Fast Delivery
          </NavLink>
          <NavLink
            to={{
              pathname: '/shop',
              filter: 'decoration',
            }}>
            Decoration
          </NavLink>
          <NavLink to="/shop">
            <FaShoppingBag />
          </NavLink>
        </div>

      </nav >
    );
  }
}

export default NavBar;
