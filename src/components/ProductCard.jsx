import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.scss';

function ProductCard({
  price, url, id, title,
}) {
  return (
    <Link to={`/singleProduct/${id}`} className="productCard">
      <div className="card">
        <div className="imageWrapper" style={{ backgroundImage: `url(${url})` }} />
        <div className="infoProduct">
          <p className="description">{title}</p>
          <p className="price">{`${price.toFixed(2)} €`}</p>
          <p className="modifyBag">
            See it
            <GoChevronRight />
          </p>
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
