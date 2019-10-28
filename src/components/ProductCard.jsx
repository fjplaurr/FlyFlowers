import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.scss';

export default function ProductCard({ url, title, longDescription, shortDescription, colors, price, trends }) {
  const newTo = {
    pathname: '/singleProduct',
    url,
  };
  return (
    <Link to={newTo} className="productCard">
      <li className="card">
        <div
          className="imageWrapper"
          style={{ backgroundImage: `url(${url})` }}
        />
        <div className="infoProduct">
          <p className="description">{shortDescription}</p>
          <div className="priceBag">
            <p className="price">{price}€</p>
            <p className="modifyBag">
              Add to bag
            <GoChevronRight />
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
}

ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
};
