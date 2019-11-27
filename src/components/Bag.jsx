import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dataArr from '../utils/data';
import ProductBag from './ProductBag';
import './Bag.scss';

function Bag(props) {
  const { bag } = props;
  const productsBagArr = dataArr.map((x) => {
    if (bag.length > 0 && bag.findIndex((product) => product.id === x.id) !== -1) {
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
      <span className="price">Price</span>
      {productsBagArr}
      <span className="total">Total: </span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    bag: state.bag,
  };
}

Bag.propTypes = {
  bag: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }).isRequired).isRequired,
};

export default connect(mapStateToProps, null)(Bag);
