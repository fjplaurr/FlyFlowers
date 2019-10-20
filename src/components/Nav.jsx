import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {
  return (
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
          <FontAwesomeIcon icon={faShoppingBag} />
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav;