import React from 'react';
import PropTypes from 'prop-types';
import styles from './BestSellers.module.scss';
import ProductCard from '../ProductCard';
import { productPropType } from '../../utils/proptypes';

const BestSellers = ({ title, collection }) => (
  <section className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.gridContainer}>
      {collection.map((product) => (
        <ProductCard
          url={product.url}
          title={product.title}
          price={product.price}
          _id={product._id}
        />
      ))}
    </div>
  </section>
);

BestSellers.propTypes = {
  title: PropTypes.string.isRequired,
  collection: PropTypes.arrayOf(productPropType).isRequired,
};

export default BestSellers;
