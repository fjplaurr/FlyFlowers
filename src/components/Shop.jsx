import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import dataArr from '../utils/data';
import {
  birthday, love, decoration, fastdelivery, yellow, red, orange, pink, under15, between15and40, over40,
} from '../utils/consts';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const query = new URLSearchParams(location.search);
    const searchIterator = query.values();
    const searchArr = Array.from(searchIterator);
    const filteredArr = this.filterInitialData();
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
      under15isActive: searchArr.includes(under15),
      between15and40isActive: searchArr.includes(between15and40),
      over40isActive: searchArr.includes(over40),
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  filterInitialData = () => {
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
    if (searchArr.includes(under15)) {
      filtered = filtered.filter((x) => x.price <= 15);
    }
    if (searchArr.includes(between15and40)) {
      filtered = filtered.filter((x) => x.price >= 15 && x.price <= 40);
    }
    if (searchArr.includes(over40)) {
      filtered = filtered.filter((x) => x.price >= 40);
    }
    return filtered;
  }

  handleFilter = (event) => {
    const { location, history } = this.props;
    const { search } = location;
    let params = new URLSearchParams(search);
    if (event.target.checked) {
      params.append(event.target.getAttribute('data-search-key'), event.target.getAttribute('data-search-value'));
    } else {
      const paramsToKeep = [];
      const keyValueArr = [...params.entries()];
      for (let i = 0; i < keyValueArr.length; i += 1) {
        if (keyValueArr[i][0] === event.target.getAttribute('data-search-key') && keyValueArr[i][1] !== event.target.getAttribute('data-search-value')) {
          paramsToKeep.push(keyValueArr[i][1]);
        }
      }
      params.delete(event.target.getAttribute('data-search-key'));
      for (let i = 0; i < paramsToKeep.length; i += 1) {
        params.append(event.target.getAttribute('data-search-key'), paramsToKeep[i]);
      }
    }
    const newLocation = {
      pathname: '/empty',
      state: { params: params.toString() },
    };
    history.push(newLocation);
  }

  render() {
    const {
      filteredArr, birthdayIsActive, loveIsActive, decorationIsActive, fastDeliveryIsActive, redIsActive,
      pinkIsActive, yellowIsActive, orangeIsActive, under15isActive, between15and40isActive, over40isActive,
    } = this.state;
    return (
      <div className="shop">
        <form className="filterForm">
          <h1 className="filtersTitle">Search your flowers</h1>
          <div className="filters">
            <div className="filterWrapper">
              <h2 className="FilterTitle">Price</h2>
              <input
                type="checkbox"
                id="priceRange1"
                onChange={this.handleFilter}
                checked={under15isActive}
                data-search-key="price"
                data-search-value="under15"
              />
              <label htmlFor="priceRange1">Under 15€</label>
              <input
                type="checkbox"
                id="priceRange2"
                data-search-key="price"
                data-search-value="between15and40"
                onChange={this.handleFilter}
                checked={between15and40isActive}
              />
              <label htmlFor="priceRange2">15€-40€</label>
              <input
                type="checkbox"
                id="priceRange3"
                data-search-key="price"
                data-search-value="over40"
                onChange={this.handleFilter}
                checked={over40isActive}
              />
              <label htmlFor="priceRange3">Over 40€</label>
            </div>
            <div className="filterWrapper">
              <h2 className="FilterTitle">Trend</h2>
              <div className="occasionRangeWrapper">
                <input
                  type="checkbox"
                  data-search-value="birthday"
                  data-search-key="occasion"
                  id="birthdayOccasion"
                  onChange={this.handleFilter}
                  checked={birthdayIsActive}
                />
                <label htmlFor="birthdayOccasion">Birthday</label>
              </div>
              <div className="occasionRangeWrapper">
                <input
                  type="checkbox"
                  data-search-value="love"
                  data-search-key="occasion"
                  id="loveOccasion"
                  onChange={this.handleFilter}
                  checked={loveIsActive}
                />
                <label htmlFor="loveOccasion">Love</label>
              </div>
              <div className="occasionRangeWrapper">
                <input
                  type="checkbox"
                  data-search-value="decoration"
                  data-search-key="occasion"
                  id="decorationOccasion"
                  onChange={this.handleFilter}
                  checked={decorationIsActive}
                />
                <label htmlFor="decorationOccasion">Decoration</label>
              </div>
              <div className="occasionRangeWrapper">
                <input
                  type="checkbox"
                  data-search-value="fastdelivery"
                  data-search-key="occasion"
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
                  data-search-value="red"
                  id="color1"
                  data-search-key="color"
                  onChange={this.handleFilter}
                  checked={redIsActive}
                />
                <label htmlFor="color1" aria-label="Filter by red color" />
              </div>
              <div className="occasionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  data-search-value="pink"
                  id="color3"
                  data-search-key="color"
                  onChange={this.handleFilter}
                  checked={pinkIsActive}
                />
                <label htmlFor="color3" aria-label="Filter by pink color" />
              </div>
              <div className="occasionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  data-search-value="yellow"
                  id="color4"
                  data-search-key="color"
                  onChange={this.handleFilter}
                  checked={yellowIsActive}
                />
                <label htmlFor="color4" aria-label="Filter by yellow color" />
              </div>
              <div className="occasionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  data-search-value="orange"
                  id="color5"
                  data-search-key="color"
                  onChange={this.handleFilter}
                  checked={orangeIsActive}
                />
                <label htmlFor="color5" aria-label="Filter by orange color" />
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
