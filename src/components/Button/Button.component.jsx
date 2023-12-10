import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ type = 'button', onClick, children, size = 'small' }) => (
  <button
    className={`${styles.button} ${
      size === 'small' ? styles.small : styles.big
    }`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'big']),
};

export default Button;
