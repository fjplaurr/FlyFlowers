import React from 'react';
import PropTypes from 'prop-types';
import './SingleProduct.scss';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Bag from './Bag';
import Footer from './Footer';


export default function SingleProduct(props) {
  const { location } = props;
  return (
    <div className="singleProductPage">
      <div className="singleProduct">
        <img className="flowersImg" src={location.url} alt="Flowers" />
        <div className="productDescription">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="priceWrapper">
            <p className="price">
              Price: {Math.floor(Math.random() * (50 - 10)) + 10}€
          </p>
            <Link
              to="/bag"
              className="modifyBag"
            >
              Add to bag
            <GoChevronRight />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

SingleProduct.propTypes = {
  location: PropTypes.shape({ url: PropTypes.string.isRequired, price: PropTypes.number.isRequired }).isRequired,
};
