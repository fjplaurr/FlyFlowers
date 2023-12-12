import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import styles from './NavBar.module.scss';
import variables from '../../variables.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { open } = this.state;
    return (
      <nav className={styles.navWrapper}>
        <button
          type="button"
          className={`${styles.navButton}`}
          onClick={this.toggle}
        >
          {open ? (
            <MdClose size="1rem" color={variables.white} />
          ) : (
            <GiHamburgerMenu size="1rem" color={variables.white} />
          )}
        </button>
        <Link to="/" className={styles.logoLink}>
          Fly Flowers
          <div className={styles.logoPink} />
          <div className={styles.logoGreen} />
        </Link>
        <div
          className={`${styles.flowersCategoriesWrapper} ${
            open ? styles.open : styles.close
          }`}
        >
          <Link
            className={styles.categoryLink}
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
            className={styles.categoryLink}
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
            className={styles.categoryLink}
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
        <Link to="/bag" className={styles.bagWrapper}>
          <AiOutlineShopping />
        </Link>
      </nav>
    );
  }
}

export default NavBar;
