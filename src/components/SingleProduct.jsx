import React from 'react';
import './SingleProduct.scss';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dataArr from '../utils/data';
import addToBag from '../redux/actions/addToBag';
import calendarIcon from '../images/calendarIcon.svg';
import increaseBilling from '../redux/actions/increaseBilling';

function SingleProduct(props) {
  const { id } = useParams();
  const uniqueProduct = dataArr.find((product) => product.id === id);
  const { history, addProductToBag, incrBilling } = props;
  const handleClick = () => {
    addProductToBag(id);
    incrBilling(uniqueProduct.price);
    history.push('/bag');
  };
  return (
    <div className="singleProduct">
      <div className="productDescription">
        <h1>{uniqueProduct.title}</h1>
        <p className="price">{`${uniqueProduct.price.toFixed(2)} €`}</p>
        <div className="deliveryFeature">
          <img src={calendarIcon} alt="Free delivery in two days" />
          <div className="deliveryDescription">
            <p>Delivery:</p>
            <p>Free in two days</p>
          </div>
        </div>
        <p className="description">{uniqueProduct.longDescription}</p>
        <input
          type="button"
          onClick={() => handleClick()}
          value="Add to bag"
        />
      </div>
      <div
        className="imageWrapper"
        style={{ backgroundImage: `url(${uniqueProduct.url})` }}
      />
    </div>
  );
}

SingleProduct.propTypes = {
  addProductToBag: PropTypes.func.isRequired,
  incrBilling: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  addProductToBag: addToBag,
  incrBilling: increaseBilling,
};

export default connect(null, mapDispatchToProps)(SingleProduct);
