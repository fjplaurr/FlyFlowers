import React from 'react';
import ProductCard from './ProductCard';
import dataArr from '../utils/data';

function Shop() {
  const compon = dataArr.map((x) =>
    <ProductCard
      url={x.url}
      title={x.title}
      longDescription={x.longDescription}
      shortDescription={x.shortDescription}
      colors={x.colors} price={x.price}
      trends={x.trends}
      key={x.id}
    />
  );
  return (
    <>
      <form className="filterForm">
        <h1 className="filtersTitle">Filters</h1>
        <div className="filterWrapper">
          <h2 className="priceFilterTitle">Price</h2>
          <div className="priceRangeWrapper">
            <input
              type="checkbox"
              name="priceRange1"
              id="priceRange1"
            />
            <label htmlFor="priceRange1">Under 15€</label>
          </div>
          <div className="priceRangeWrapper">
            <input
              type="checkbox"
              name="priceRange2"
              id="priceRange2"
            />
            <label htmlFor="priceRange2">15€-40€</label>
          </div>
          <div className="priceRangeWrapper">
            <input
              type="checkbox"
              name="priceRange3"
              id="priceRange3"
            />
            <label htmlFor="priceRange3">Over 40€</label>
          </div>
        </div>
        <div className="filterWrapper">
          <h2 className="ocassionFilterTitle">Trend</h2>
          <div className="ocassionRangeWrapper">
            <input
              type="checkbox"
              name="ocassion1"
              id="ocassion1"
            />
            <label htmlFor="ocassion1">Birthday</label>
          </div>
          <div className="ocassionRangeWrapper">
            <input
              type="checkbox"
              name="ocassion2"
              id="ocassion2"
            />
            <label htmlFor="ocassion2">Love</label>
          </div>
          <div className="ocassionRangeWrapper">
            <input
              type="checkbox"
              name="ocassion3"
              id="ocassion3"
            />
            <label htmlFor="ocassion3">Decoration</label>
          </div>
          <div className="ocassionRangeWrapper">
            <input
              type="checkbox"
              name="ocassion4"
              id="ocassion4"
            />
            <label htmlFor="ocassion1">Fast Delivery</label>
          </div>
        </div>
      </form>
      <div className="gridWrapper">{compon}</div>
    </>
  )
}

export default Shop;

