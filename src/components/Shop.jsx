import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import dataArr from '../utils/data';
import {
  birthday, love, decoration, fastdelivery, yellow, red, orange, pink,
} from '../utils/consts';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const query = new URLSearchParams(location.search);
    const searchIterator = query.values();
    const searchArr = Array.from(searchIterator);
    const filteredArr = this.filter();
    this.state = {
      filteredArr: [...filteredArr],
      birthdayIsActive: searchArr.includes(birthday),
      loveIsActive: searchArr.includes(love),
      decorationIsActive: searchArr.includes(decoration),
      fastDeliveryIsActive: searchArr.includes(fastdelivery),
      pinkIsActive: searchArr.includes(pink),
      redIsActive: searchArr.includes(red),
      orangeIsActive: searchArr.includes(orange),
      yellowIsActive: searchArr.includes(yellow),
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  filter = () => {
    const { location } = this.props;
    let filtered = [...dataArr];
    const query = new URLSearchParams(location.search);
    const searchIterator = query.values();
    const searchArr = Array.from(searchIterator);
    if (searchArr.includes(birthday)) {
      filtered = filtered.filter((x) => x.occasions.includes(birthday));
    }
    if (searchArr.includes(love)) {
      filtered = filtered.filter((x) => x.occasions.includes(love));
    }
    if (searchArr.includes(decoration)) {
      filtered = filtered.filter((x) => x.occasions.includes(decoration));
    }
    if (searchArr.includes(fastdelivery)) {
      filtered = filtered.filter((x) => x.occasions.includes(fastdelivery));
    }
    if (searchArr.includes(red)) {
      filtered = filtered.filter((x) => x.colors.includes(red));
    }
    if (searchArr.includes(pink)) {
      filtered = filtered.filter((x) => x.colors.includes(pink));
    }
    if (searchArr.includes(yellow)) {
      filtered = filtered.filter((x) => x.colors.includes(yellow));
    }
    if (searchArr.includes(orange)) {
      filtered = filtered.filter((x) => x.colors.includes(orange));
    }
    return filtered;
  }

  handleFilter = (event) => {
    const { location, history } = this.props;
    const { search } = location;
    let params = new URLSearchParams(search);
    if (event.target.checked) {
      params.append(event.target.getAttribute('data-search-param'), event.target.name);
    } else {
      const paramsToKeep = [];
      const keyValueArr = [...params.entries()];
      for (let i = 0; i < keyValueArr.length; i += 1) {
        if (keyValueArr[i][0] === event.target.getAttribute('data-search-param') && keyValueArr[i][1] !== event.target.name) {
          paramsToKeep.push(keyValueArr[i][1]);
        }
      }
      params.delete(event.target.getAttribute('data-search-param'));
      for (let i = 0; i < paramsToKeep.length; i += 1) {
        params.append(event.target.getAttribute('data-search-param'), paramsToKeep[i]);
      }
    }
    const newLocation = {
      pathname: '/empty',
      state: { params: params.toString() },
    };
    history.push(newLocation);
  }

  /*
  handleFilter = () => {
    let filtered = [...dataArr];
    if (document.getElementById('priceRange1').checked) {
      filtered = filtered.filter((x) => x.price < 15);
    }
    if (document.getElementById('priceRange2').checked) {
      filtered = filtered.filter((x) => x.price > 15 && x.price < 40);
    }
    if (document.getElementById('priceRange3').checked) {
      filtered = filtered.filter((x) => x.price > 40);
    }
    if (document.getElementById('occasion1').checked) {
      filtered = filtered.filter((x) => x.occasions.includes(document.getElementById('occasion1').name));
    }
    if (document.getElementById('occasion2').checked) {
      filtered = filtered.filter((x) => x.occasions.includes(document.getElementById('occasion2').name));
    }
    if (document.getElementById('occasion3').checked) {
      filtered = filtered.filter((x) => x.occasions.includes(document.getElementById('occasion3').name));
    }
    if (document.getElementById('occasion4').checked) {
      filtered = filtered.filter((x) => x.occasions.includes(document.getElementById('occasion4').name));
    }
    if (document.getElementById('color1').checked) {
      filtered = filtered.filter((x) => x.colors.includes(document.getElementById('color1').name));
    }
    if (document.getElementById('color3').checked) {
      filtered = filtered.filter((x) => x.colors.includes(document.getElementById('color3').name));
    }
    this.setState({ filteredArr: filtered });
  }
  */

  render() {
    const {
      filteredArr, birthdayIsActive, loveIsActive, decorationIsActive, fastDeliveryIsActive, redIsActive, pinkIsActive, yellowIsActive, orangeIsActive,
    } = this.state;
    return (
      <div>
        <form className="filterForm">
          <h1 className="filtersTitle">Search your flowers</h1>
          <div className="filters">
            <div className="filterWrapper">
              <h2 className="FilterTitle">Price</h2>
              <input
                type="radio"
                name="priceRange"
                id="priceRange0"
                onChange={this.handleFilter}
                defaultChecked
              />
              <label htmlFor="priceRange0">All Prices</label>
              <input
                type="radio"
                name="priceRange"
                id="priceRange1"
                onChange={this.handleFilter}
              />
              <label htmlFor="priceRange1">Under 15€</label>
              <input
                type="radio"
                name="priceRange"
                id="priceRange2"
                onChange={this.handleFilter}
              />
              <label htmlFor="priceRange2">15€-40€</label>
              <input
                type="radio"
                name="priceRange"
                id="priceRange3"
                onChange={this.handleFilter}
              />
              <label htmlFor="priceRange3">Over 40€</label>
            </div>
            <div className="filterWrapper">
              <h2 className="FilterTitle">Trend</h2>
              <div className="occasionRangeWrapper">
                <input
                  type="checkbox"
                  name="birthday"
                  data-search-param="occasion"
                  id="birthdayOccasion"
                  onChange={this.handleFilter}
                  checked={birthdayIsActive}
                />
                <label htmlFor="birthdayOccasion">Birthday</label>
              </div>
              <div className="occasionRangeWrapper">
                <input
                  type="checkbox"
                  name="love"
                  data-search-param="occasion"
                  id="loveOccasion"
                  onChange={this.handleFilter}
                  checked={loveIsActive}
                />
                <label htmlFor="loveOccasion">Love</label>
              </div>
              <div className="occasionRangeWrapper">
                <input
                  type="checkbox"
                  name="decoration"
                  data-search-param="occasion"
                  id="decorationOccasion"
                  onChange={this.handleFilter}
                  checked={decorationIsActive}
                />
                <label htmlFor="decorationOccasion">Decoration</label>
              </div>
              <div className="occasionRangeWrapper">
                <input
                  type="checkbox"
                  name="fastdelivery"
                  data-search-param="occasion"
                  id="fastdeliveryOccasion"
                  onChange={this.handleFilter}
                  checked={fastDeliveryIsActive}
                />
                <label htmlFor="fastdeliveryOccasion">Fast Delivery</label>
              </div>
            </div>
            <div className="filterWrapper">
              <h2 className="FilterTitle">Color</h2>
              <div className="occasionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="red"
                  id="color1"
                  data-search-param="color"
                  onChange={this.handleFilter}
                  checked={redIsActive}
                />
                <label htmlFor="color1" />
              </div>
              <div className="occasionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="pink"
                  id="color3"
                  data-search-param="color"
                  onChange={this.handleFilter}
                  checked={pinkIsActive}
                />
                <label htmlFor="color3" />
              </div>
              <div className="occasionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="yellow"
                  id="color4"
                  data-search-param="color"
                  onChange={this.handleFilter}
                  checked={yellowIsActive}
                />
                <label htmlFor="color4" />
              </div>
              <div className="occasionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="orange"
                  id="color5"
                  data-search-param="color"
                  onChange={this.handleFilter}
                  checked={orangeIsActive}
                />
                <label htmlFor="color5" />
              </div>
            </div>
          </div>
        </form>
        <div className="gridWrapper">
          {filteredArr.map((x) => (
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
          ))}
        </div>
      </div>
    );
  }
}

Shop.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    search: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default Shop;
