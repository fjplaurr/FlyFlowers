import React from 'react';
import styles from './ProductBag.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addToBag from '../../../redux/actions/addToBag';
import deleteFromBag from '../../../redux/actions/deleteFromBag';
import increaseBilling from '../../../redux/actions/increaseBilling';
import decreaseBilling from '../../../redux/actions/decreaseBilling';
import CalendarIcon from '../../../images/CalendarIcon';

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

  function changeQuantity(event) {
    addProductToBag(_id, event.target.value);
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
              value={bag.find((elem) => elem._id === _id).quantity}
              onChange={changeQuantity}
              onInput={(event) => {
                if (event.target.value.length > 2) {
                  // eslint-disable-next-line no-param-reassign
                  event.target.value = event.target.value.slice(0, 2);
                }
              }}
            />
          </div>
          <div className={styles.priceWrapper}>
            {`${(bag.find((product) => product._id === _id).quantity * price).toFixed(2)}€`}
          </div>
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
  id: PropTypes.string.isRequired,
  deleteProductFromBag: PropTypes.func.isRequired,
  addProductToBag: PropTypes.func.isRequired,
  incrBilling: PropTypes.func.isRequired,
  bag: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBag);
