import React from 'react';
import PropTypes from 'prop-types';
import styles from './BestSellers.module.scss';
import ProductCard from '../ProductCard';

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
  collection: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      longDescription: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired,
      occasions: PropTypes.arrayOf(PropTypes.string).isRequired,
      url: PropTypes.string.isRequired,
      collection: PropTypes.string.isRequired,
      trending: PropTypes.bool.isRequired,
      recommended: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default BestSellers;
