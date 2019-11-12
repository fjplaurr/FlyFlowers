import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dataArr from '../utils/data';
import ProductBag from './ProductBag';
import './Bag.scss';

function Bag(props) {
  const { productId } = props;
  const productsBagArr = dataArr.map((x) => {
    if (productId.includes(x.id)) {
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
          name={x.title}
        />
      );
    }
    return false;
  });
  return (
    <div className="bag">
      <h1>Your bag</h1>
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
