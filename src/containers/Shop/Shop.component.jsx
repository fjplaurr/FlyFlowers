import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { URIPARAMS } from '../../utils/consts';
import fetchProducts from '../../redux/actions/productsActions';
import ProductsGrid from '../../components/ProductGrid';
import FilterPanel from './FilterPanel';
import styles from './Shop.module.scss';
import { productPropType } from '../../utils/proptypes';

const Shop = ({ location, history, productsStore }) => {
  const [filteredArr, setFilteredArr] = useState([]);

  // fetch products first time it renders if they are not in the store
  useEffect(() => {
    if (productsStore.length === 0) {
      fetchProducts();
    }
  }, []);

  // Filter flowers
  useEffect(() => {
    const filterInitialData = () => {
      let filtered = [...productsStore];
      const query = new URLSearchParams(location.search);
      const searchIterator = query.values();
      const searchArr = Array.from(searchIterator);
      const possibleOccasions = URIPARAMS.OCCASION;

      Object.keys(URIPARAMS.OCCASION).forEach((prop) => {
        if (searchArr.includes(possibleOccasions[prop])) {
          filtered = filtered.filter((item) =>
            item.occasions.includes(possibleOccasions[prop]),
          );
        }
      });

      const possibleColors = URIPARAMS.COLOR;

      Object.keys(URIPARAMS.COLOR).forEach((prop) => {
        if (searchArr.includes(possibleColors[prop])) {
          filtered = filtered.filter((item) =>
            item.colors.includes(possibleColors[prop]),
          );
        }
      });

      if (searchArr.includes(URIPARAMS.PRICE.UNDER15)) {
        filtered = filtered.filter((item) => item.price <= 15);
      }
      if (searchArr.includes(URIPARAMS.PRICE.BETWEEN15AND40)) {
        filtered = filtered.filter(
          (item) => item.price >= 15 && item.price <= 40,
        );
      }
      if (searchArr.includes(URIPARAMS.PRICE.OVER40)) {
        filtered = filtered.filter((item) => item.price > 40);
      }
      return filtered;
    };
    const dataFiltered = filterInitialData();
    setFilteredArr(dataFiltered);
  }, [productsStore]);

  return (
    <div className={styles.shop}>
      <FilterPanel location={location} history={history} />
      {filteredArr.length > 0 && <ProductsGrid items={filteredArr} />}
    </div>
  );
};

Shop.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.objectOf(PropTypes.string.isRequired),
    search: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  productsStore: PropTypes.arrayOf(productPropType).isRequired,
};

function mapStateTopProps(state) {
  return {
    productsStore: state.products.products,
  };
}

export default connect(mapStateTopProps, null)(Shop);
