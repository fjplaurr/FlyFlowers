import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import dataArr from '../utils/data';
import './Shop.scss';
import {
  BIRTHDAY, LOVE, DECORATION, YELLOW, RED, ORANGE, PINK, UNDER15, BETWEEN15AND40, OVER40,
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
      birthdayIsActive: searchArr.includes(BIRTHDAY),
      loveIsActive: searchArr.includes(LOVE),
      decorationIsActive: searchArr.includes(DECORATION),
      pinkIsActive: searchArr.includes(PINK),
      redIsActive: searchArr.includes(RED),
      orangeIsActive: searchArr.includes(ORANGE),
      yellowIsActive: searchArr.includes(YELLOW),
      under15isActive: searchArr.includes(UNDER15),
      between15and40isActive: searchArr.includes(BETWEEN15AND40),
      over40isActive: searchArr.includes(OVER40),
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  filterInitialData = () => {
    const { location } = this.props;
    let filtered = [...dataArr];
    const query = new URLSearchParams(location.search);
    const searchIterator = query.values();
    const searchArr = Array.from(searchIterator);
    if (searchArr.includes(BIRTHDAY)) {
      filtered = filtered.filter((x) => x.occasions.includes(BIRTHDAY));
    }
    if (searchArr.includes(LOVE)) {
      filtered = filtered.filter((x) => x.occasions.includes(LOVE));
    }
    if (searchArr.includes(DECORATION)) {
      filtered = filtered.filter((x) => x.occasions.includes(DECORATION));
    }
    if (searchArr.includes(RED)) {
      filtered = filtered.filter((x) => x.colors.includes(RED));
    }
    if (searchArr.includes(PINK)) {
      filtered = filtered.filter((x) => x.colors.includes(PINK));
    }
    if (searchArr.includes(YELLOW)) {
      filtered = filtered.filter((x) => x.colors.includes(YELLOW));
    }
    if (searchArr.includes(ORANGE)) {
      filtered = filtered.filter((x) => x.colors.includes(ORANGE));
    }
    if (searchArr.includes(UNDER15)) {
      filtered = filtered.filter((x) => x.price <= 15);
    }
    if (searchArr.includes(BETWEEN15AND40)) {
      filtered = filtered.filter((x) => x.price >= 15 && x.price <= 40);
    }
    if (searchArr.includes(OVER40)) {
      filtered = filtered.filter((x) => x.price > 40);
    }
    return filtered;
  }

  handleFilter = (event) => {
    const { location, history } = this.props;
    const { search } = location;
    const params = new URLSearchParams(search);
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
      filteredArr, birthdayIsActive, loveIsActive, decorationIsActive, redIsActive,
      pinkIsActive, yellowIsActive, orangeIsActive, under15isActive, between15and40isActive,
      over40isActive,
    } = this.state;
    return (
      <div>
        <div className="shop">

          <form className="filterForm">
            <div className="filters">
              <div className="filterWrapper">
                <h2 className="FilterTitle">Colors</h2>
                <div className="colors">
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
                </div>
              </div>
              <div className="filterWrapper">
                <h2 className="FilterTitle">Occasions</h2>
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
                  <label htmlFor="decorationOccasion"> Decoration</label>
                </div>
              </div>
              <div className="filterWrapper">
                <h2 className="FilterTitle"> Price</h2>
                <input
                  type="checkbox"
                  id="priceRange1"
                  onChange={this.handleFilter}
                  checked={under15isActive}
                  data-search-key="price"
                  data-search-value="under15"
                />
                <label htmlFor="priceRange1">0 - 15 €</label>
                <input
                  type="checkbox"
                  id="priceRange2"
                  data-search-key="price"
                  data-search-value="between15and40"
                  onChange={this.handleFilter}
                  checked={between15and40isActive}
                />
                <label htmlFor="priceRange2">15 - 40 €</label>
                <input
                  type="checkbox"
                  id="priceRange3"
                  data-search-key="price"
                  data-search-value="over40"
                  onChange={this.handleFilter}
                  checked={over40isActive}
                />
                <label htmlFor="priceRange3">Over 40 €</label>
              </div>
            </div>
          </form>
          <div className="productsWrapper">
            <h1 className="pageTitle">Search your flowers</h1>
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
        </div>
      </div>
    );
  }
}

Shop.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.objectOf(PropTypes.string.isRequired),
    search: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Shop;
