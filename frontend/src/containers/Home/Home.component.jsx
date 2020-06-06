import React, { useEffect, useState } from 'react';
import './Home.scss';
import ProductCard from '../../components/ProductCard';
import Advertisement from './Advertisement';
import coverPage from '../../images/coverPage.jpg';
import lightColorImg from '../../images/lightColorImg.jpg';
import colorfulImg from '../../images/colorfulImg.jpg';
import Rocket from '../../images/Rocket';
import Calendar from '../../images/Calendar'
import Flower from '../../images/Flower';
import FeatureCard from './FeatureCard';
import { connect } from 'react-redux';
import fetchProducts from '../../redux/actions/productsActions';

const Home = ({ productsStore }) => {
  const [lightCollection, setLightCollection] = useState();
  const [colorfulCollection, setColorfulCollection] = useState();

  // fetch products first time it renders if they are not in the store
  useEffect(() => {
    if (!productsStore.length) {
      fetchProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('productsStoreproductsStore');
    console.log(productsStore)
    function getTrendingProducts(trendingCollection) {
      return productsStore && productsStore.length && productsStore.map((product) => {
        const {
          trending, collection, url, title, longDescription,
          shortDescription, colors, price, trends, id,
        } = product;
        if (collection === trendingCollection && trending) {
          return (
            <ProductCard
              url={url}
              title={title}
              longDescription={longDescription}
              shortDescription={shortDescription}
              colors={colors}
              price={price}
              trends={trends}
              key={id}
              id={id}
            />
          );
        }
        return false;
      });
    }

    const lightColl = getTrendingProducts('light');
    setLightCollection(lightColl);
    const colorfultColl = getTrendingProducts('colorful');
    setColorfulCollection(colorfultColl);
  }, [productsStore])

  return (
    <div className="home">
      <div className="header">
        <img className="coverPage" src={coverPage} alt="Flowers as a gift" />
        <div className="captionHeader">
          <h1>
            Something special
            <br />
            for someone unique
          </h1>
          <h2>It's time to give smiles</h2>
        </div>
      </div>
      <section className="features">
        <h2>See our services</h2>
        <div className="featuresWrapper">
          <FeatureCard
            featureDescript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget adipiscing eleifend laoreet lorem malesuada varius. Aliquam commodo ullamcorper non."
            featureSvg={Rocket}
            title="Two-days delivery"
          />
          <FeatureCard
            featureDescript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget adipiscing eleifend laoreet rper non."
            featureSvg={Flower}
            title="Guaranteed fresh"
          />
          <FeatureCard
            featureDescript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget adipiscing eleifend laoreet lorem malesuada varius. Aliquam commodo ullamcorper non ."
            featureSvg={Calendar}
            title="Precise delivery date"
          />
        </div>
      </section>
      <div className="gridProducts">
        <Advertisement
          imageUrl={colorfulImg}
          imageClass="colorfulImg"
          imageAlt="Spring Bouquet"
        />
        <h2 className="collectionHeader">Best-selling Colorful Bouquets</h2>
        <div className="gridWrapper">
          {colorfulCollection}
          <div className="subWrapper" />
        </div>
        <Advertisement
          imageUrl={lightColorImg}
          imageClass="lightColorImg"
          imageAlt="Winter Bouquet"
        />
        <h2 className="collectionHeader">Best-selling Light Bouquets</h2>
        <div className="gridWrapper">
          {lightCollection}
          <div className="subWrapper" />
        </div>
      </div>
    </div>
  );
}

function mapStateTopProps(state) {
  return {
    productsStore: state.products.products,
  }
}

export default connect(mapStateTopProps, null)(Home);
