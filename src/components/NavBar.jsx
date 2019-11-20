import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { FaAlignRight } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';

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
            Fly Flowers
            <div className="logoPink" />
            <div className="logoGreen" />
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
            to={{
              pathname: '/empty',
              search: '?occasion=birthday',
              state: { params: 'occasion=birthday' },
            }}
          >
            Birthday
          </Link>
          <Link
            to={{
              pathname: '/empty',
              search: '?occasion=love',
              state: { params: 'occasion=love' },
            }}
          >
            Love
          </Link>
          <Link
            to={{
              pathname: '/empty',
              search: '?occasion=decoration',
              state: { params: 'occasion=decoration' },
            }}
          >
            Decoration
          </Link>
          <Link
            to={{
              pathname: '/empty',
              search: '?occasion=fastdelivery',
              state: { params: 'occasion=fastdelivery' },
            }}
          >
            Fast Delivery
          </Link>
          <Link to="/bag" className="bagWrapper">
            <AiOutlineShopping />
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
