import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type, className, onClick, children,
}) => <button className={className} type={type} onClick={onClick}>{children}</button>;

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Button.defaultProps = {
  // type default value in most of the browsers is submit.
  type: 'button',
  className: null,
  onClick: null,
  children: null,
};

export default Button;
