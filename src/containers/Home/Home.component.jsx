import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import Advertisement from './Advertisement';
import BestSellers from '../../components/BestSellers';
import Services from './Services';
import Header from './Header';
import fetchProducts from '../../redux/actions/productsActions';
import { filterByBestSellersAndCollection } from './helpers';

const Home = ({ productsStore, history }) => {
  // fetch products first time it renders if they are not in the store
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.home}>
      <Header />
      <Services />
      <Advertisement
        backgroundImage="colorful"
        history={history}
        title="Colorful collection"
        subtitle="Vivid colors that inspire"
      />
      <BestSellers
        title="Best-selling Colorful Bouquets"
        collection={filterByBestSellersAndCollection(productsStore, 'colorful')}
      />
      <Advertisement
        backgroundImage="light"
        history={history}
        title="Light collection"
        subtitle="The beauty of softness"
      />
      <BestSellers
        title="Best-selling Light Bouquets"
        collection={filterByBestSellersAndCollection(productsStore, 'light')}
      />
    </div>
  );
};

Home.propTypes = {
  productsStore: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      longDescription: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired,
      occasions: PropTypes.arrayOf(PropTypes.string).isRequired,
      url: PropTypes.string.isRequired,
      collection: PropTypes.string.isRequired,
      trending: PropTypes.bool.isRequired,
      recommended: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateTopProps(state) {
  return {
    productsStore: state.products.products,
  };
}

export default connect(mapStateTopProps, null)(Home);
