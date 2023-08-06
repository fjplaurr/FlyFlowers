import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ProductBag.module.scss';
import { addToBag, deleteFromBag } from '../../../redux/actions/bagActions';
import {
  increaseBilling,
  decreaseBilling,
} from '../../../redux/actions/billingActions';
import { Calendar } from '../../../assets';

const ProductBag = ({
  product,
  deleteProductFromBag,
  addProductToBag,
  incrBilling,
  bag,
}) => {
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { _id, price, url, shortDescription } = product;

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

  const handleInputChange = (event) => {
    const { value, maxLength } = event.target;
    let quantity = value.slice(0, maxLength);
    // if the input field is empty
    if (!quantity) {
      quantity = 0;
    }
    // change total quantity in input
    setTotalQuantity(parseInt(quantity, 10));
    // increase the billing in redux
    incrBilling(price);
    // add product to redux
    addProductToBag(product, quantity);
  };

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
            <label className={styles.quantityWrapperLabel} htmlFor={_id}>
              Quantity:
            </label>
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
            {Calendar(true)}
            <span className={styles.deliverySpan}>
              Delivery free in two days
            </span>
          </div>
          <button
            className={styles.customButton}
            type="button"
            onClick={() => {
              deleteProductFromBag(_id);
            }}
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
  reduceBilling: decreaseBilling,
  incrBilling: increaseBilling,
};

ProductBag.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  deleteProductFromBag: PropTypes.func.isRequired,
  addProductToBag: PropTypes.func.isRequired,
  incrBilling: PropTypes.func.isRequired,
  bag: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBag);
