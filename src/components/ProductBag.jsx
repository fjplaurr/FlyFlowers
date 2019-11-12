import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import './ProductBag.scss';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ProductBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
    }
    this.reduceQuantity = this.reduceQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  reduceQuantity() {
    console.log('click')
  }

  increaseQuantity() {

  }

  render() {
    const {
      price, url, shortDescription, id, title
    } = this.props;
    return (
      <div className="productBag" >
        <div
          className="imageWrapper"
          style={{ backgroundImage: `url(${url})` }}
        />
        <div className="infoWrapper">
          <div>{shortDescription}</div>
          <div className="quantityWrapper">
            <p>Quantity:</p>
            <button
              type="button"
              onClick={this.reduceQuantity}
            >
              <FiMinusCircle />
            </button>
            <span className="quantity">4</span>
            <button
              type="button"
              onClick={this.increaseQuantity}
            >
              <FiPlusCircle />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ProductBag.propTypes = {
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default connect(null, null)(ProductBag);
