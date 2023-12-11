import React from 'react';
import styles from './Header.module.scss';
import { coverPage } from '../../../assets';

const Header = () => (
  <div className={styles.header}>
    <img
      className={styles.coverPage}
      src={coverPage}
      alt="girl holding a bouquet of flowers"
    />
    <h1 className={styles.headerTitle}>
      Something special
      <br />
      for someone unique
    </h1>
  </div>
);

export default Header;
