import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = (event) => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { open } = this.state;
    return (
      <nav className="navBar">
        <div className="navWrapper">
          <button
            type="button"
            className="navButton hideHighResolut"
            onClick={this.toggle}
          >
            {open ? <MdClose /> : <GiHamburgerMenu />}
          </button>
          <div className="logoNavBar">
            <Link to="/">
              Fly Flowers
              <div className="logoPink" />
              <div className="logoGreen" />
            </Link>
          </div>
          <div className={open ? 'linksNavBar open' : 'linksNavBar close'}>
            <Link
              to={{
                pathname: '/empty',
                search: '?occasion=birthday',
                state: { params: 'occasion=birthday' },
              }}
              onClick={this.toggle}
            >
              Birthday
            </Link>
            <Link
              to={{
                pathname: '/empty',
                search: '?occasion=love',
                state: { params: 'occasion=love' },
              }}
              onClick={this.toggle}
            >
              Love
            </Link>
            <Link
              to={{
                pathname: '/empty',
                search: '?occasion=decoration',
                state: { params: 'occasion=decoration' },
              }}
              onClick={this.toggle}
            >
              Decoration
            </Link>
          </div>
          <Link
            to="/bag"
            className="bagWrapper"
          >
            <AiOutlineShopping />
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
