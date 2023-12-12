import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ProductBag.module.scss';
import { addToBag, deleteFromBag } from '../../../redux/actions/bagActions';
import DeliveryAd from '../../../components/DeliveryAd';
import { productPropType, bagPropType } from '../../../utils/proptypes';

const ProductBag = ({
  product,
  deleteProductFromBag,
  addProductToBag,
  bag,
}) => {
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { _id, price, url, description } = product;

  useEffect(() => {
    // change total price every time the bag is updated
    setTotalPrice((totalQuantity * price).toFixed(2));
  }, [bag, _id, price, totalQuantity]);

  useEffect(() => {
    // set total quantity the first time it renders
    if (bag) {
      const index = bag.findIndex((element) => element.product._id === _id);
      if (index !== -1) {
        setTotalQuantity(bag[index].quantity);
      }
    }
  }, []);

  const handleQuantityChange = (change) => {
    let newQuantity = totalQuantity;

    if (change === 'increase') {
      newQuantity += 1;
    } else if (change === 'decrease') {
      newQuantity -= 1;
    }

    if (newQuantity === 0) {
      deleteProductFromBag(_id);
    } else {
      setTotalQuantity(newQuantity);
      addProductToBag(product, newQuantity);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imageWrapper}
        style={{ backgroundImage: `url(${url})` }}
      />
      <div className={styles.infoWrapper}>
        <div className={styles.topInfoWrapper}>
          <p className={styles.descriptionProduct}>{description}</p>
          <div className={styles.quantityWrapper}>
            <span>{totalQuantity}</span>
            <div className={styles.quantityIncreaserDecreaserWrapper}>
              <button
                className={styles.quantityModifierButton}
                onClick={() => handleQuantityChange('increase')}
              >
                ^
              </button>
              <button
                className={`${styles.quantityModifierButton} ${styles.verticalRotate}`}
                onClick={() => handleQuantityChange('decrease')}
              >
                ^
              </button>
            </div>
          </div>
          <div className={styles.priceWrapper}>{`${totalPrice}€`}</div>
        </div>
        <div className={styles.bottomInfoWrapper}>
          <DeliveryAd />
          <button
            className={styles.customButton}
            type="button"
            onClick={() => deleteProductFromBag(_id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    bag: state.bag,
  };
}

const mapDispatchToProps = {
  addProductToBag: addToBag,
  deleteProductFromBag: deleteFromBag,
};

ProductBag.propTypes = {
  product: productPropType,
  deleteProductFromBag: PropTypes.func.isRequired,
  addProductToBag: PropTypes.func.isRequired,
  bag: bagPropType,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBag);
