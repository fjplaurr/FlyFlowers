import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';

function ProductCard({
  price, url, _id, title,
}) {
  return (
    <Link
      style={{
        textDecoration: 'none',
      }}
      to={`/singleProduct/${_id}`}
      className={styles.productCard}>
      <div className={styles.card}>
        <div
          className={styles.imageWrapper}
          style={{ backgroundImage: `url(${url})` }}
        />
        <div className={styles.infoProduct}>
          <p className={styles.description}>{title}</p>
          <p className={styles.price}>{`${price.toFixed(2)} €`}</p>
          <p className={styles.modifyBag}>
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
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
