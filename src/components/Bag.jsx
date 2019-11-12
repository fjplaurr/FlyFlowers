import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dataArr from '../utils/data';
import ProductBag from './ProductBag';

function Bag(props) {
  const { productId } = props;
  const productsBagArr = dataArr.map((x) => {
    if (x.id === productId) {
      return (
        <ProductBag
          url={x.url}
          title={x.title}
          longDescription={x.longDescription}
          shortDescription={x.shortDescription}
          colors={x.colors}
          price={x.price}
          trends={x.trends}
          key={x.id}
          id={x.id}
        />
      );
    }
  });
  return (

    <div>
      <div>Working on this page</div>
      <h1>Your bag:</h1>
      <div>{productsBagArr}</div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    productId: state.productId,
  };
}

Bag.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Bag);
