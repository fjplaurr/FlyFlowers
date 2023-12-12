import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductBag from './ProductBag';
import styles from './Bag.module.scss';
import BestSellers from '../../components/BestSellers';
import { productPropType } from '../../utils/proptypes';
import fetchProducts from '../../redux/actions/productsActions';

const Bag = ({ bag, productsStore }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // fetch products first time it renders if they are not in the store
  useEffect(() => {
    if (productsStore.length === 0) {
      fetchProducts();
    }
  }, [productsStore]);

  // set total quantity and price when bag is updated
  useEffect(() => {
    const newTotalQuantity = bag.reduce(
      (total, obj) => total + parseInt(obj.quantity, 10),
      0,
    );

    const newTotalPrice = bag.reduce(
      (total, obj) => total + parseInt(obj.quantity, 10) * obj.product.price,
      0,
    );

    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);
  }, [bag]);

  const filteredRecommendedProducts = productsStore.filter(
    (item) =>
      item.recommended && !bag.some((obj) => obj.product._id === item._id),
  );

  return (
    <div className={styles.container}>
      {bag.length > 0 ? (
        <div className={styles.headerWithProducts}>
          <h1 className={styles.titleHeader}>Your bag</h1>
          <div className={styles.totalWrapper}>
            <p className={styles.totalProducts}>{`${parseInt(
              totalQuantity,
              10,
            )} Products`}</p>
            <p className={styles.priceTop}>{`Total: ${totalPrice.toFixed(
              2,
            )}€`}</p>
          </div>
        </div>
      ) : (
        <div className={styles.headerWithoutProducts}>
          <h1 className={styles.titleHeader}>Your bag is empty.</h1>
          <h2 className={styles.subtitleHeaderWithoutProducts}>
            Explore our shop and add some color.
          </h2>
        </div>
      )}
      {bag.map((item) => (
        <ProductBag product={item.product} key={item.product._id} />
      ))}
      {bag.length > 0 ? (
        <p className={styles.priceBottom}>{`Total: ${totalPrice.toFixed(
          2,
        )}€`}</p>
      ) : null}
      <div className={styles.recommendationsContainer}>
        <BestSellers
          title="A few recommended flowers"
          collection={filteredRecommendedProducts}
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    bag: state.bag,
    productsStore: state.products.products,
  };
}

Bag.propTypes = {
  bag: PropTypes.arrayOf(
    PropTypes.shape({
      product: productPropType,
      quantity: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  productsStore: PropTypes.arrayOf(productPropType).isRequired,
};

export default connect(mapStateToProps, null)(Bag);
