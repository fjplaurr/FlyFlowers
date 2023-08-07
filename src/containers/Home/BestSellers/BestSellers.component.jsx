import React from 'react';
import PropTypes from 'prop-types';
import styles from './BestSellers.module.scss';

const BestSellers = ({ title, collection }) => (
  <div className={styles.featureWrapper}>
    <h2 className={styles.collectionHeader}>{title}</h2>
    <div className={styles.gridWrapper}>{collection}</div>
  </div>
);

BestSellers.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  collection: PropTypes.array.isRequired,
};

export default BestSellers;
