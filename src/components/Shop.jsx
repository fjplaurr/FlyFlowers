import React from 'react';
import ProductCard from './ProductCard';

function importAll(r) {
  const images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

function Shop() {
  const images = importAll(require.context('../images', false, /\d.(png|jpe?g)$/));
  const compon = Object.keys(images).map((key) => <ProductCard url={images[key]} key={key} />);
  return (
    <>
      <form>
        <h1 className="filtersTitle">Filters</h1>
        <div className="priceFilterWrapper">
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
      </form>
      <div className="gridWrapper">{compon}</div>
    </>
  )
}

export default Shop;

