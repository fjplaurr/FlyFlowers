import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.scss';

function ProductCard(props) {
  const {
    price, url, shortDescription, id,
  } = props;
  return (
    <Link
      to={`/singleProduct/${id}`}
      className="productCard"
    >
      <div className="card">
        <div
          className="imageWrapper"
          style={{ backgroundImage: `url(${url})` }}
        />
        <div className="infoProduct">
          <p className="description">{shortDescription}</p>
          <div className="priceBag">
            <p className="price">
              {`${price}€`}
            </p>
            <p className="modifyBag">
              Add to bag
              <GoChevronRight />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
