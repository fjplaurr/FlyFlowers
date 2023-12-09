import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToBag } from '../../redux/actions/bagActions';
import { increaseBilling } from '../../redux/actions/billingActions';
import styles from './SingleProduct.module.scss';

const SingleProduct = ({
  history,
  addProductToBag,
  incrBilling,
  productsStore,
}) => {
  const [product, setProduct] = useState();
  // get id from params
  const { id } = useParams();

  // filter all products with the id received from params
  useEffect(() => {
    const item = productsStore.find((elem) => elem._id === id);
    setProduct(item);
  }, [productsStore, id]);

  // add product to bag
  const handleClick = () => {
    addProductToBag(product, 1);
    incrBilling(product.price);
    history.push('/bag');
  };

  return product ? (
    <div className={styles.singleProduct}>
      <div className={styles.productDescription}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.price}>{`${product.price.toFixed(2)} €`}</p>
        <p className={styles.description}>{product.longDescription}</p>
        <button
          className={styles.customButton}
          type="button"
          onClick={() => handleClick()}
        >
          Add to bag
        </button>
      </div>
      <div
        className={styles.imageWrapper}
        style={{ backgroundImage: `url(${product.url})` }}
      />
    </div>
  ) : null;
};

SingleProduct.propTypes = {
  addProductToBag: PropTypes.func.isRequired,
  incrBilling: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  addProductToBag: addToBag,
  incrBilling: increaseBilling,
};

// proptypes
SingleProduct.propTypes = {
  productsStore: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      longDescription: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired,
      occasions: PropTypes.arrayOf(PropTypes.string).isRequired,
      url: PropTypes.string.isRequired,
      collection: PropTypes.string.isRequired,
      trending: PropTypes.bool.isRequired,
      recommended: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

function mapStateToProps(state) {
  return {
    productsStore: state.products.products,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
