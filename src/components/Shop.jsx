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


  shouldComponentUpdate() {
    //Next code makes the page refresh even if we click in navbar a different Link that shares a same Route than the current one.
    const { search, pathname } = this.props.history.location;
    this.props.history.push({ pathname: '/empty' });
    setTimeout(() => {
      this.props.history.replace({ pathname: pathname, search: search });
    });
    return true;
  }

  componentWillMount() {
    let filtered = [...dataArr];
    const { location } = this.props;
    const query = new URLSearchParams(location.search);
    if (query) {
      const occasion = query.get('occasion');
      filtered = filtered.filter((x) => x.occasions.includes(occasion));
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

  render() {
    const { filteredArr } = this.state;
    const { location } = this.props;
    const query = new URLSearchParams(location.search);
    let occasion;
    if (query) {
      occasion = query.get('occasion');
    }
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
                  id="occasion1"
                  onChange={this.handleFilter}
                  defaultChecked={occasion === 'birthday' ? true : false}
                />
                <label htmlFor="occasion1">Birthday</label>
              </div>
              <div className="occasionRangeWrapper">
                <input
                  type="checkbox"
                  name="love"
                  id="occasion2"
                  onChange={this.handleFilter}
                  defaultChecked={occasion === 'love' ? true : false}
                />
                <label htmlFor="occasion2">Love</label>
              </div>
              <div className="occasionRangeWrapper">
                <input
                  type="checkbox"
                  name="decoration"
                  id="occasion3"
                  onChange={this.handleFilter}
                  defaultChecked={occasion === 'decoration' ? true : false}
                />
                <label htmlFor="occasion3">Decoration</label>
              </div>
              <div className="occasionRangeWrapper">
                <input
                  type="checkbox"
                  name="fast delivery"
                  id="occasion4"
                  onChange={this.handleFilter}
                  defaultChecked={occasion === 'fast delivery' ? true : false}
                />
                <label htmlFor="occasion4">Fast Delivery</label>
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
                  onChange={this.handleFilter}
                />
                <label htmlFor="color1"></label>
              </div>
              <div className="occasionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="pink"
                  id="color3"
                  onChange={this.handleFilter}
                />
                <label htmlFor="color3"></label>
              </div>
              <div className="occasionRangeWrapper">
                <input
                  className="colorInput"
                  type="checkbox"
                  name="yellow"
                  id="color4"
                  onChange={this.handleFilter}
                />
                <label htmlFor="color4"></label>
              </div>
              <div className="occasionRangeWrapper">
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

