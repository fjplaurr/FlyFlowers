import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductBag from './ProductBag';
import ProductCard from '../../components/ProductCard';
import styles from './Bag.module.scss';
function Bag({ bag, products }) {
  // const [productsBag, setProductsBag] = useState([]);
  // const [totalQuantity, setTotalQuantity] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  let totalPrice = 0;
  let totalQuantity = 0;

  const productsBagArr = products.map((item) => {
    const index = bag.findIndex((product) => product._id === item._id);
    if (bag.length > 0 && index !== -1) {
      totalQuantity += bag[index].quantity;
      totalPrice += item.price * bag[index].quantity;
      return (
        <ProductBag
          url={item.url}
          title={item.title}
          longDescription={item.longDescription}
          shortDescription={item.shortDescription}
          colors={item.colors}
          price={item.price}
          trends={item.trends}
          key={item._id}
          _id={item._id}
          name={item.title}
        />
      );
    }
    return false;
  });

  return (
    <div className={styles.bag}>
      {bag.length > 0
        ? (
          <div className={styles.headerWithProducts}>
            <h1 className={styles.titleHeaderWithProducts}>Your bag</h1>
            <div className={styles.totalWrapper}>
              <p className={styles.totalProducts}>{`${parseInt(totalQuantity, 0)} Products`}</p>
              <p className={styles.priceTop}>{`Total: ${totalPrice.toFixed(2)}€`}</p>
            </div>
          </div>
        )
        : (
          <div className={styles.headerWithoutProducts}>
            <h1 className={styles.titleHeader}>Your bag is empty.</h1>
            <h2 className={styles.subtitleHeader}>Explore our shop and add some color.</h2>
          </div>
        )}
      {productsBagArr}
      <div className={styles.bagBottom}>
        {bag.length > 0 ? (
          <p className={styles.priceBottom}>{`Total: ${totalPrice.toFixed(2)}€`}</p>
        ) : <></>}
        <div className={styles.recommendations}>
          <h2 className={styles.titleRecommendations}>A few recommended flowers.</h2>
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
              return (<></>);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    bag: state.bag,
    products: state.products.products,
  };
}

Bag.propTypes = {
  bag: PropTypes.arrayOf(PropTypes.shape({ quantity: PropTypes.number }).isRequired).isRequired,
};

export default connect(mapStateToProps, null)(Bag);
