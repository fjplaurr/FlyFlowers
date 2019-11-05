import React from 'react';
import ProductCard from './ProductCard';
import dataArr from '../utils/data';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredArr: [...dataArr],
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentWillMount() {
    let filtered = [...dataArr];
    const { location } = this.props;
    if (location.filter) {
      filtered = filtered.filter((x) => x.ocassions.includes(location.filter));
    }
    this.setState({ filteredArr: filtered });
  }

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
    if (document.getElementById('ocassion1').checked) {
      filtered = filtered.filter((x) => x.ocassions.includes(document.getElementById('ocassion1').name));
    }
    if (document.getElementById('ocassion2').checked) {
      filtered = filtered.filter((x) => x.ocassions.includes(document.getElementById('ocassion2').name));
    }
    if (document.getElementById('ocassion3').checked) {
      filtered = filtered.filter((x) => x.ocassions.includes(document.getElementById('ocassion3').name));
    }
    if (document.getElementById('ocassion4').checked) {
      filtered = filtered.filter((x) => x.ocassions.includes(document.getElementById('ocassion4').name));
    }
    if (document.getElementById('color1').checked) {
      filtered = filtered.filter((x) => x.colors.includes(document.getElementById('color1').name));
    }
    if (document.getElementById('color3').checked) {
      filtered = filtered.filter((x) => x.colors.includes(document.getElementById('color3').name));
    }
    this.setState({ filteredArr: filtered });
  }

  render() {
    const { filteredArr } = this.state;
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
              <div className="ocassionRangeWrapper">
                <input
                  type="checkbox"
                  name="birthday"
                  id="ocassion1"
                  onChange={this.handleFilter}
                  defaultChecked={this.props.location.filter === 'birthday' ? true : false}
                />
                <label htmlFor="ocassion1">Birthday</label>
              </div>
              <div className="ocassionRangeWrapper">
                <input
                  type="checkbox"
                  name="love"
                  id="ocassion2"
                  onChange={this.handleFilter}
                  defaultChecked={this.props.location.filter === 'love' ? true : false}
                />
                <label htmlFor="ocassion2">Love</label>
              </div>
              <div className="ocassionRangeWrapper">
                <input
                  type="checkbox"
                  name="decoration"
                  id="ocassion3"
                  onChange={this.handleFilter}
                  defaultChecked={this.props.location.filter === 'decoration' ? true : false}
                />
                <label htmlFor="ocassion3">Decoration</label>
              </div>
              <div className="ocassionRangeWrapper">
                <input
                  type="checkbox"
                  name="fast delivery"
                  id="ocassion4"
                  onChange={this.handleFilter}
                  defaultChecked={this.props.location.filter === 'fast delivery' ? true : false}
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
                  name="red"
                  id="color1"
                  onChange={this.handleFilter}
                />
                <label htmlFor="color1"></label>
              </div>
              <div className="ocassionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="pink"
                  id="color3"
                  onChange={this.handleFilter}
                />
                <label htmlFor="color3"></label>
              </div>
              <div className="ocassionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="yellow"
                  id="color4"
                  onChange={this.handleFilter}
                />
                <label htmlFor="color4"></label>
              </div>
              <div className="ocassionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="orange"
                  id="color5"
                  onChange={this.handleFilter}
                />
                <label htmlFor="color5"></label>
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
          ))
          }
        </div>
      </div>
    );
  }
}

export default Shop;

