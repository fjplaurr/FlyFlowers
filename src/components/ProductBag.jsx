import React from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import './ProductBag.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addToBag from '../redux/actions/addToBag';
import decreaseFromBag from '../redux/actions/decreaseFromBag';

class ProductBag extends React.Component {
  constructor(props) {
    super(props);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  decreaseQuantity() {
    const { id, decreaseProductFromBag } = this.props;
    decreaseProductFromBag(id);
  }

  increaseQuantity() {
    const { id, addProductToBag } = this.props;
    addProductToBag(id);
  }

  render() {
    const {
      url, shortDescription, id, bag, price
    } = this.props;
    return (
      <div className="productBag">
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
              onClick={this.decreaseQuantity}
            >
              <FiMinusCircle />
            </button>
            <span className="quantity">{bag.find((product) => product.id === id).quantity}</span>
            <button
              type="button"
              onClick={this.increaseQuantity}
            >
              <FiPlusCircle />
            </button>
          </div>
        </div>
        <div className="priceWrapper">{price}</div>
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
  decreaseProductFromBag: decreaseFromBag,
};

ProductBag.propTypes = {
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  bag: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBag);
