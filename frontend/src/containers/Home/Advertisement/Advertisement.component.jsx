import React from 'react';
import PropTypes from 'prop-types';
import styles from './Advertisement.module.scss'

function Advertisement({ imageUrl, imageClass, imageAlt, history }) {
  return (
    <div className={styles.advertisementContainer}>
      <img
        src={imageUrl}
        className={imageClass}
        alt={imageAlt}
      />
      <div>
        <h1>Colorful Collection</h1>
        <h2>Vivid colors that inspire</h2>
        <button
          type="button"
          onClick={() => history.push('/shop')}
        >
          Discover it
        </button>
      </div>
    </div>
  );
}

Advertisement.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageClass: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default Advertisement;
