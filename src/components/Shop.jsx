import React from 'react';
import ProductCard from './ProductCard';
import dataArr from '../utils/data';

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

class Shop extends React.Component {
  render() {
    return (
      <div>
        <form className="filterForm">
          <h1 className="filtersTitle">Search your flowers</h1>
          <div className="filters">
            <div className="filterWrapper">
              <h2 className="FilterTitle">Price</h2>
              <input
                type="checkbox"
                name="priceRange1"
                id="priceRange1"
              />
              <label htmlFor="priceRange1">Under 15€</label>
              <input
                type="checkbox"
                name="priceRange2"
                id="priceRange2"
              />
              <label htmlFor="priceRange2">15€-40€</label>
              <input
                type="checkbox"
                name="priceRange3"
                id="priceRange3"
              />
              <label htmlFor="priceRange3">Over 40€</label>
            </div>
            <div className="filterWrapper">
              <h2 className="FilterTitle">Trend</h2>
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
                <label htmlFor="ocassion4">Fast Delivery</label>
              </div>
            </div>
            <div className="filterWrapper">
              <h2 className="FilterTitle">Color</h2>
              <div className="ocassionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="color1"
                  id="color1"
                />
                <label htmlFor="color1"></label>
              </div>
              <div className="ocassionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="color2"
                  id="color2"
                />
                <label htmlFor="color2"></label>
              </div>
              <div className="ocassionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="color3"
                  id="color3"
                />
                <label htmlFor="color3"></label>
              </div>
              <div className="ocassionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="color4"
                  id="color4"
                />
                <label htmlFor="color4"></label>
              </div>
            </div>
          </div>
        </form>
        <div className="gridWrapper">{compon}</div>
      </div>
    )
  }
}

export default Shop;

