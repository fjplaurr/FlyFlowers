import React from 'react';
import './SingleProduct.scss';
import { GoChevronRight } from 'react-icons/go';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dataArr from '../utils/data';
import addToBag from '../redux/actions/addToBag';
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
    <div className="singleProductPage">
      <div className="singleProduct">
        <img
          className="flowersImg"
          src={uniqueProduct.url}
          alt="Flowers"
        />
        <div className="productDescription">
          <h1>{uniqueProduct.title}</h1>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="priceWrapper">
            <p className="price">
              {`Price: ${uniqueProduct.price}€`}
            </p>
            <div className="addBag">
              <input
                type="button"
                onClick={() => handleClick()}
                value="Add to bag"
              />
              <GoChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SingleProduct.propTypes = {
  addProductToBag: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  addProductToBag: addToBag,
  incrBilling: increaseBilling,
};

export default connect(null, mapDispatchToProps)(SingleProduct);
