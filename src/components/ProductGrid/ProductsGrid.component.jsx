import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import styles from './ProductsGrid.module.scss';
import { productPropType } from '../../utils/proptypes';

const ProductsGrid = ({ items = [] }) => (
  <div className={styles.productsWrapper}>
    <h1 className={styles.pageTitle}>Search your flowers</h1>
    <div className={styles.gridWrapper}>
      {items.map((item) => (
        <div key={item._id}>
          <ProductCard
            url={item.url}
            title={item.title}
            price={item.price}
            _id={item._id}
          />
        </div>
      ))}
    </div>
  </div>
);

ProductsGrid.propTypes = {
  items: PropTypes.arrayOf(productPropType).isRequired,
};

export default ProductsGrid;
