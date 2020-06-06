import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { URIPARAMS } from '../../utils/consts';
import { connect } from 'react-redux';
import fetchProducts from '../../redux/actions/productsActions';
import ProductsGrid from '../../components/ProductGrid';
import FilterPanel from './FilterPanel';
import styles from './Shop.module.scss';

const Shop = ({ location, history, productsStore }) => {
  const [filteredArr, setFilteredArr] = useState();

  // fetch flowers
  useEffect(() => {
    if (!productsStore.length) {
      fetchProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Filter flowers
  useEffect(() => {
    const filterInitialData = () => {
      let filtered = [...productsStore];
      const query = new URLSearchParams(location.search);
      const searchIterator = query.values();
      const searchArr = Array.from(searchIterator);
      const possibleOccasions = URIPARAMS.OCCASION;
      for (let prop in URIPARAMS.OCCASION) {
        if (searchArr.includes(possibleOccasions[prop])) {
          filtered = filtered.filter((item) => item.occasions.includes(possibleOccasions[prop]));
        }
      }
      const possibleColors = URIPARAMS.COLOR;
      for (let prop in URIPARAMS.COLOR) {
        if (searchArr.includes(possibleColors[prop])) {
          filtered = filtered.filter((item) => item.occasions.includes(possibleColors[prop]));
        }
      }
      if (searchArr.includes(URIPARAMS.PRICE.UNDER15)) {
        filtered = filtered.filter((item) => item.price <= 15);
      }
      if (searchArr.includes(URIPARAMS.PRICE.BETWEEN15AND40)) {
        filtered = filtered.filter((item) => item.price >= 15 && item.price <= 40);
      }
      if (searchArr.includes(URIPARAMS.PRICE.OVER40)) {
        filtered = filtered.filter((item) => item.price > 40);
      }
      return filtered;
    }
    const dataFiltered = filterInitialData();
    setFilteredArr(dataFiltered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.shop}>
      <FilterPanel
        location={location}
        history={history}
      />
      <ProductsGrid
        items={filteredArr}
      />
    </div>
  )
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

function mapStateTopProps(state) {
  return {
    productsStore: state.products.products,
  }
}

export default connect(mapStateTopProps, null)(Shop);
