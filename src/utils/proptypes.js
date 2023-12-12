import PropTypes from 'prop-types';

const productPropType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  occasions: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  trending: PropTypes.bool.isRequired,
  recommended: PropTypes.bool.isRequired,
}).isRequired;

const bagPropType = PropTypes.arrayOf(
  PropTypes.shape({
    product: productPropType,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
).isRequired;

export { productPropType, bagPropType };
