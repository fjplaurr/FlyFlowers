import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import Advertisement from './Advertisement';
import BestSellers from './BestSellers';
import { colorfulImg, lightColorImg } from '../../assets';
import Services from './Services';
import Header from './Header';
import fetchProducts from '../../redux/actions/productsActions';
import variables from '../../variables.scss';
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
        title="Colorful collection"
        subtitle="Vivid colors that inspire"
        history={history}
        imageUrl={colorfulImg}
        imageClass={styles.colorfulImg}
        imageAlt="Spring Bouquet"
        textColor={variables.white}
        bottonColor={variables.white}
        bottonTextColor={variables.darkBlack}
        bottonHoverColor={variables.darkGreen}
        bottonTextHoverColor={variables.white}
      />
      <BestSellers
        title="Best-selling Colorful Bouquets"
        collection={filterByBestSellersAndCollection(productsStore, 'colorful')}
      />
      <Advertisement
        title="Light collection"
        subtitle="The beauty of softness"
        history={history}
        imageUrl={lightColorImg}
        imageClass={styles.lightColorImg}
        imageAlt="Winter Bouquet"
        textColor={variables.black}
        bottonColor={variables.darkBlack}
        bottonTextColor={variables.white}
        bottonHoverColor={variables.darkGreen}
        bottonTextHoverColor={variables.white}
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
