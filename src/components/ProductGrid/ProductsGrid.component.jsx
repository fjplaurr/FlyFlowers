import React from 'react';
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
          longDescription={item.longDescription}
          shortDescription={item.shortDescription}
          colors={item.colors}
          price={item.price}
          trends={item.trends}
          key={item._id}
          _id={item._id}
        />
      ))}
    </div>
  </div>
);

export default ProductsGrid;
