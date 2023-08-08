import React from 'react';
import PropTypes from 'prop-types';
import styles from './BestSellers.module.scss';
import ProductCard from '../../../components/ProductCard';

const BestSellers = ({ title, collection }) => (
  <div className={styles.featureWrapper}>
    <h2 className={styles.collectionHeader}>{title}</h2>
    <div className={styles.gridWrapper}>
      {collection.map((product) => (
        <ProductCard
          url={product.url}
          title={product.title}
          longDescription={product.longDescription}
          shortDescription={product.shortDescription}
          colors={product.colors}
          price={product.price}
          trends={product.trends}
          key={product._id}
          _id={product._id}
        />
      ))}
    </div>
  </div>
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