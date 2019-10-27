import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.scss';

export default function ProductCard({ url }) {
  const newTo = {
    pathname: '/singleProduct',
    url,
  };
  return (
    <Link to={newTo}>
      <li className="card">
        <div
          className="imageWrapper"
          style={{ backgroundImage: `url(${url})` }}
        />
        <div className="infoProduct">
          <div className="textCard">
            <p className="description">Lorem ipsum dolor sit amet</p>
            <p>{Math.floor(Math.random() * (50 - 10)) + 10}€</p>
          </div>
          <p className="modifyBag">
            Add to bag
            <GoChevronRight />
          </p>
        </div>
      </li>
    </Link>
  );
}

ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
};
