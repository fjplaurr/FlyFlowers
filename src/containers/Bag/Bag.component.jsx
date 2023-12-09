import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductBag from './ProductBag';
import ProductCard from '../../components/ProductCard';
import styles from './Bag.module.scss';

const Bag = ({ bag, products }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // set total quantity and price when bag is updated
  useEffect(() => {
    const getTotalQuantity = () => {
      let total = 0;
      bag.forEach((obj) => {
        total += parseInt(obj.quantity, 10);
      });
      return total;
    };
    const getTotalPrice = () => {
      let total = 0;
      bag.forEach((obj) => {
        total += parseInt(obj.quantity, 10) * obj.product.price;
      });
      return total;
    };

    setTotalQuantity(getTotalQuantity(bag));
    setTotalPrice(getTotalPrice(bag));
  }, [bag]);

  const productsBag = bag.map((item) => <ProductBag product={item.product} />);

  return (
    <div className={styles.bag}>
      {bag.length > 0 ? (
        <div className={styles.headerWithProducts}>
          <h1 className={styles.titleHeaderWithProducts}>Your bag</h1>
          <div className={styles.totalWrapper}>
            <p className={styles.totalProducts}>{`${parseInt(
              totalQuantity,
              10,
            )} Products`}</p>
            <p className={styles.priceTop}>{`Total: ${totalPrice.toFixed(
              2,
            )}€`}</p>
          </div>
        </div>
      ) : (
        <div className={styles.headerWithoutProducts}>
          <h1 className={styles.titleHeaderWithoutProducts}>
            Your bag is empty.
          </h1>
          <h2 className={styles.subtitleHeaderWithoutProducts}>
            Explore our shop and add some color.
          </h2>
        </div>
      )}
      {productsBag}
      <div className={styles.bagBottom}>
        {bag.length > 0 ? (
          <p className={styles.priceBottom}>{`Total: ${totalPrice.toFixed(
            2,
          )}€`}</p>
        ) : null}
        <div className={styles.recommendations}>
          <h2 className={styles.titleRecommendations}>
            A few recommended flowers.
          </h2>
          <div className={styles.recommendedFlowers}>
            {products.map((item) => {
              if (item.recommended) {
                return (
                  <ProductCard
                    url={item.url}
                    title={item.title}
                    longDescription={item.longDescription}
                    shortDescription={item.shortDescription}
                    colors={item.colors}
                    price={item.price}
                    trends={item.trends}
                    key={item._id}
                    _id={item._id}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    bag: state.bag,
    products: state.products.products,
  };
}

Bag.propTypes = {
  bag: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      }),
      quantity: PropTypes.number,
    }).isRequired,
  ).isRequired,
  products: PropTypes.arrayOf(
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

export default connect(mapStateToProps, null)(Bag);
