import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Advertisement.module.scss';

const Advertisement = ({
  imageUrl,
  imageClass,
  imageAlt,
  history,
  title,
  subtitle,
  textColor,
  bottonColor,
  bottonTextColor,
  bottonHoverColor,
  bottonTextHoverColor,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.container}>
      <h1 className={styles.title} style={{ color: textColor }}>
        {title}
      </h1>
      <h2 className={styles.subtitle} style={{ color: textColor }}>
        {subtitle}
      </h2>
      <button
        style={
          hover
            ? {
                backgroundColor: bottonHoverColor,
                color: bottonTextHoverColor,
              }
            : {
                backgroundColor: bottonColor,
                color: bottonTextColor,
              }
        }
        className={styles.toShopButton}
        type="button"
        onClick={() => history.push('/shop')}
        onMouseOver={() => setHover(true)}
        onFocus={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onBlur={() => setHover(false)}
      >
        Discover it
      </button>
      <img
        src={imageUrl}
        className={`${imageClass} ${styles.picture}`}
        alt={imageAlt}
      />
    </div>
  );
};

Advertisement.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageClass: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Advertisement;
