import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dataArr from '../utils/data';
import ProductBag from './ProductBag';
import ProductCard from './ProductCard';
import './Bag.scss';

function Bag({ bag }) {
  let totalPrice = 0;
  let totalQuantity = 0;
  const productsBagArr = dataArr.map((x) => {
    const index = bag.findIndex((product) => product.id === x.id);
    if (bag.length > 0 && index !== -1) {
      totalQuantity += bag[index].quantity;
      totalPrice += x.price * bag[index].quantity;
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
      {bag.length > 0
        ? (
          <div className="headerWithProducts">
            <h1>Your bag</h1>
            <div className="totalWrapper">
              <p className="totalProducts">{`${parseInt(totalQuantity, 0)} Products`}</p>
              <p className="priceTop">{`Total: ${totalPrice.toFixed(2)}€`}</p>
            </div>
          </div>
        )
        : (
          <div className="headerWithoutProducts">
            <h1>Your bag is empty.</h1>
            <h2>Explore our shop and add some color.</h2>
          </div>
        )}
      {productsBagArr}
      <div className="bagBottom">
        {bag.length > 0 ? (
          <p className="priceBottom">{`Total: ${totalPrice.toFixed(2)}€`}</p>
        ) : <></>}
        <div className="recommendations">
          <h2>A few recommended flowers.</h2>
          <div className="recommendedFlowers">
            {dataArr.map((x) => {
              if (x.recommended) {
                return (
                  <ProductCard
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
  };
}

Bag.propTypes = {
  bag: PropTypes.arrayOf(PropTypes.shape({ quantity: PropTypes.number, id: PropTypes.string }).isRequired).isRequired,
};

export default connect(mapStateToProps, null)(Bag);
