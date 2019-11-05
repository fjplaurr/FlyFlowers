import React from 'react';
import './SingleProduct.scss';
import { GoChevronRight } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import dataArr from '../utils/data';

function SingleProduct() {
  const { id } = useParams();
  const uniqueProduct = dataArr.find((product) => product.id === id);
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

export default SingleProduct;
