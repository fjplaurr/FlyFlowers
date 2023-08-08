import React from 'react';
import styles from './Header.module.scss';
import { coverPage } from '../../../assets';

const Header = () => (
  <div className={styles.header}>
    <img
      className={styles.coverPage}
      src={coverPage}
      alt="Flowers that inspire"
    />
    <div className={styles.captionHeader}>
      <h1 className={styles.headerTitle}>
        Something special
        <br />
        for someone unique
      </h1>
      <h2 className={styles.headerSubtitle}>Flowers that inspire</h2>
    </div>
  </div>
);

export default Header;
