import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import styles from './ProductsGrid.module.scss';

const ProductsGrid = ({ items = [] }) => (
  <div className={styles.productsWrapper}>
    <h1 className={styles.pageTitle}>Search your flowers</h1>
    <div className={styles.gridWrapper}>
      {items.map((item) => (
        <ProductCard
          url={item.url}
          title={item.title}
          price={item.price}
          _id={item._id}
        />
      ))}
    </div>
  </div>
);

ProductsGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      price: PropTypes.number.isRequired,
      trending: PropTypes.bool.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductsGrid;
