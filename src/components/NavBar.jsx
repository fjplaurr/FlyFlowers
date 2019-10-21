import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import { FaShoppingBag, FaAlignRight } from 'react-icons/fa';

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
        <ul className="topNav">
          <li>
            <NavLink
              activeClassName="active"
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/second"
            >
              Second
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/second"
            >
              <FaShoppingBag />
            </NavLink>
          </li>
          <button type="button" className="navButton" onClick={this.toggle}>
            <FaAlignRight />
          </button>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
