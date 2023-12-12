import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductBag from './ProductBag';
import styles from './Bag.module.scss';
import BestSellers from '../../components/BestSellers';
import { productPropType } from '../../utils/proptypes';

const Bag = ({ bag, products }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // set total quantity and price when bag is updated
  useEffect(() => {
    const getTotalQuantity = () => {
      bag.reduce((total, obj) => total + parseInt(obj.quantity, 10), 0);
    };

    const getTotalPrice = () =>
      bag.reduce(
        (total, obj) => total + parseInt(obj.quantity, 10) * obj.product.price,
        0,
      );

    setTotalQuantity(getTotalQuantity(bag));
    setTotalPrice(getTotalPrice(bag));
  }, [bag]);

  const recommendedProducts = products.filter((item) => item.recommended);

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
        <div key={item.product._id}>
          <ProductBag product={item.product} />
        </div>
      ))}
      {bag.length > 0 ? (
        <p className={styles.priceBottom}>{`Total: ${totalPrice.toFixed(
          2,
        )}€`}</p>
      ) : null}
      <div className={styles.recommendationsContainer}>
        <BestSellers
          title="A few recommended flowers"
          collection={recommendedProducts}
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    bag: state.bag,
    products: state.products.products,
  };
}

Bag.propTypes = {
  bag: PropTypes.arrayOf(
    PropTypes.shape({
      product: productPropType,
      quantity: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  products: PropTypes.arrayOf(productPropType).isRequired,
};

export default connect(mapStateToProps, null)(Bag);
