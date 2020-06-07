import React, { useEffect, useState } from 'react';
import styles from './ProductBag.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addToBag from '../../../redux/actions/addToBag';
import deleteFromBag from '../../../redux/actions/deleteFromBag';
import increaseBilling from '../../../redux/actions/increaseBilling';
import decreaseBilling from '../../../redux/actions/decreaseBilling';
import { CalendarIcon } from '../../../assets';

function ProductBag({
  _id,
  addProductToBag,
  price,
  incrBilling,
  deleteProductFromBag,
  url,
  shortDescription,
  bag,
}) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const productStore = bag.find((elem) => elem._id === _id);
    // change total quantity every time the bag is updated
    setTotalQuantity(productStore.quantity);
    // change total price every time the bag is updated
    setTotalPrice((productStore.quantity * price).toFixed(2))
  }, [bag, _id, price])

  const handleInputChange = (event) => {
    const { value, maxLength } = event.target;
    const quantity = value.slice(0, maxLength);
    // add product to redux
    addProductToBag(_id, quantity);
    // increase the billing in redux
    incrBilling(price);
  }

  return (
    <div className={styles.productBag}>
      <div
        className={styles.imageWrapper}
        style={{ backgroundImage: `url(${url})` }}
      />
      <div className={styles.completeInfoWrapper}>
        <div className={styles.infoWrapper}>
          <p className={styles.descriptionProduct}>{shortDescription}</p>
          <div className={styles.quantityWrapper}>
            <label className={styles.quantityWrapperLabel} htmlFor={_id}>Quantity:</label>
            <input
              className={styles.quantityWrapperInput}
              id={_id}
              type="number"
              min="1"
              value={totalQuantity}
              onChange={handleInputChange}
              maxLength="2"
            />
          </div>
          <div className={styles.priceWrapper}>{`${totalPrice}€`}</div>
        </div>
        <div className={styles.bottomInfoWrapper}>
          <div className={styles.deliveryInfo}>
            <CalendarIcon />
            <span className={styles.deliverySpan}>Delivery free in two days</span>
          </div>
          <button
            className={styles.customButton}
            type="button"
            onClick={() => deleteProductFromBag(_id)}
          >Remove
           </button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    bag: state.bag,
  };
}

const mapDispatchToProps = {
  addProductToBag: addToBag,
  deleteProductFromBag: deleteFromBag,
  reduceBilling: decreaseBilling,
  incrBilling: increaseBilling,
};

ProductBag.propTypes = {
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  deleteProductFromBag: PropTypes.func.isRequired,
  addProductToBag: PropTypes.func.isRequired,
  incrBilling: PropTypes.func.isRequired,
  bag: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBag);
