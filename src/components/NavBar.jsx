import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import { FaShoppingBag, FaAlignRight } from 'react-icons/fa';
import flyFlowersLogo from '../images/flyFlowersLogo.svg';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    const { opened } = this.state;
    this.setState({ opened: !opened });
  }

  render() {
    return (
      <nav className="navBar">
        <div className="logoNavBar">
          <NavLink
            activeClassName="active"
            to="/"
          >
            <img className="companyLogo" src={flyFlowersLogo} alt="Company logo" />
          </NavLink>
        </div>
        <div className="linksNavBar">
          <NavLink
            activeClassName="active"
            to="/shop"
          >
            Birthday
        </NavLink>
          <NavLink
            activeClassName="active"
            to="/shop"
          >
            Love
        </NavLink>
          <NavLink
            activeClassName="active"
            to="/shop"
          >
            Fast Delivery
        </NavLink>
          <NavLink
            activeClassName="active"
            to="/shop"
          >
            Plants
        </NavLink>
          <NavLink
            activeClassName="active"
            to="/shop"
          >
            <FaShoppingBag />
          </NavLink>
          <button
            type="button"
            className="navButton hideHighResolut"
            onClick={this.toggle}
          >
            <FaAlignRight />
          </button>
        </div>
      </nav >
    );
  }
}

export default NavBar;
