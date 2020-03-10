import React from 'react';
import './ProductBag.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addToBag from '../redux/actions/addToBag';
import deleteFromBag from '../redux/actions/deleteFromBag';
import increaseBilling from '../redux/actions/increaseBilling';
import decreaseBilling from '../redux/actions/decreaseBilling';
import calendarIcon from '../images/calendarIcon.svg';
import Button from './Button';

class ProductBag extends React.Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity(event) {
    const {
      id, addProductToBag, price, incrBilling,
    } = this.props;
    addProductToBag(id, event.target.value);
    incrBilling(price);
  }

  deleteProduct() {
    const {
      id, deleteProductFromBag,
    } = this.props;
    deleteProductFromBag(id);
  }

  render() {
    const {
      url, shortDescription, id, bag, price,
    } = this.props;
    return (
      <div className="productBag">
        <div
          className="imageWrapper"
          style={{ backgroundImage: `url(${url})` }}
        />
        <div className="completeInfoWrapper">
          <div className="infoWrapper">
            <p className="descriptionProduct">
              {shortDescription}
            </p>
            <div className="quantityWrapper">
              {/* Use id as parameter for htmlFor property */}
              <label htmlFor={id}>Quantity:</label>
              <input
                id={id}
                type="number"
                min="1"
                value={bag.find((product) => product.id === id).quantity}
                onInput={(event) => {
                  if (event.target.value.length > 3) {
                    // eslint-disable-next-line no-param-reassign
                    event.target.value = event.target.value.slice(0, 3);
                  }
                }}
                onChange={this.changeQuantity}
              />
            </div>
            <div className="priceWrapper">{`${(bag.find((product) => product.id === id).quantity * price).toFixed(2)}€`}</div>
          </div>
          <div className="bottomInfoWrapper">
            <div className="deliveryInfo">
              <img
                className="calendarIcon"
                src={calendarIcon}
                alt="free delivery"
              />
              <p>
                Delivery:
                <span> free in two days</span>
              </p>
            </div>
            <Button onClick={this.deleteProduct}>Remove</Button>
          </div>
        </div>
      </div>
    );
  }
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
