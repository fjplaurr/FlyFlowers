import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToBag } from '../../redux/actions/bagActions';
import styles from './SingleProduct.module.scss';
import DeliveryAd from '../DeliveryAd';
import Button from '../Button';

const SingleProduct = ({ history, addProductToBag, productsStore }) => {
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
    history.push('/bag');
  };

  return product ? (
    <div className={styles.container}>
      <div className={styles.productInfo}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.price}>{`${product.price.toFixed(2)} €`}</p>
        <DeliveryAd />
        <p className={styles.description}>{product.longDescription}</p>
      </div>
      <div className={styles.imageAndButtonContainer}>
        <div
          className={styles.imageWrapper}
          style={{ backgroundImage: `url(${product.url})` }}
        />
        <Button size="big" onClick={() => handleClick()}>
          Add to bag
        </Button>
      </div>
    </div>
  ) : null;
};

SingleProduct.propTypes = {
  addProductToBag: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  addProductToBag: addToBag,
};

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
