import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
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
      <nav className={styles.navBar}>
        <div className={styles.navWrapper}>
          <button
            type="button"
            className={`${styles.navButton} ${styles.hideHighResolut}`}
            onClick={this.toggle}>
            {open ?
              <MdClose
                size={'1rem'}
                color={'#ffffff'}
              /> :
              <GiHamburgerMenu
                size={'1rem'}
                color={'#ffffff'}
              />}
          </button>
          <div className={styles.logoNavBar}>
            <Link
              style={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '18px',
              }}
              to="/"
            >
              Fly Flowers
              <div className={styles.logoPink} />
              <div className={styles.logoGreen} />
            </Link>
          </div>
          <div
            className={open ? `${styles.linksNavBar} ${styles.open}` : `${styles.linksNavBar} ${styles.close}`}>
            <Link
              style={{
                color: '#e6e6e6',
                padding: '1rem 2rem',
              }}
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
              style={{
                color: '#e6e6e6',
                padding: '1rem 2rem',
              }}
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
              style={{
                color: '#e6e6e6',
                padding: '1rem 2rem',
              }}
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
            style={{
              color: '#e6e6e6',
              padding: '1rem 2rem',
            }}
            to="/bag"
            className={styles.bagWrapper}
          >
            <AiOutlineShopping />
          </Link>
        </div>
      </nav >
    );
  }
}

export default NavBar;
