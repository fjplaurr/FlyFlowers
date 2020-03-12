import React from 'react';
import './ProductBag.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addToBag from '../redux/actions/addToBag';
import deleteFromBag from '../redux/actions/deleteFromBag';
import increaseBilling from '../redux/actions/increaseBilling';
import decreaseBilling from '../redux/actions/decreaseBilling';
import calendarIcon from '../images/calendarIcon.svg';

function ProductBag(props) {
  const {
    id, addProductToBag, price, incrBilling, deleteProductFromBag, url, shortDescription, bag,
  } = props;

  function changeQuantity(event) {
    addProductToBag(id, event.target.value);
    incrBilling(price);
  }

  return (
    <div className="productBag">
      <div className="imageWrapper" style={{ backgroundImage: `url(${url})` }} />
      <div className="completeInfoWrapper">
        <div className="infoWrapper">
          <p className="descriptionProduct">{shortDescription}</p>
          <div className="quantityWrapper">
            <label htmlFor={id}>Quantity:</label>
            <input
              id={id}
              type="number"
              min="1"
              value={bag.find((elem) => elem.id === id).quantity}
              onChange={changeQuantity}
              onInput={(event) => {
                if (event.target.value.length > 2) {
                  // eslint-disable-next-line no-param-reassign
                  event.target.value = event.target.value.slice(0, 2);
                }
              }}
            />
          </div>
          <div className="priceWrapper">{`${(bag.find((product) => product.id === id).quantity * price).toFixed(2)}€`}</div>
        </div>
        <div className="bottomInfoWrapper">
          <div className="deliveryInfo">
            <img className="calendarIcon" src={calendarIcon} alt="free delivery" />
            <span>Delivery free in two days</span>
          </div>
          <button type="button" onClick={() => deleteProductFromBag(id)}>Remove</button>
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
