import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './Home.module.scss';
import ProductCard from '../../components/ProductCard';
import Advertisement from './Advertisement';
import {
  colorfulImg,
  coverPage,
  lightColorImg,
  Rocket,
  Calendar,
  Flower
} from '../../assets';
import FeatureCard from './FeatureCard';
import fetchProducts from '../../redux/actions/productsActions';
import variables from '../../variables.scss'

const Home = ({ productsStore, history }) => {
  const [lightCollection, setLightCollection] = useState();
  const [colorfulCollection, setColorfulCollection] = useState();

  // fetch products first time it renders if they are not in the store
  useEffect(() => {
    if (!productsStore.length) {
      fetchProducts();
    }
  }, []);

  useEffect(() => {
    function getTrendingProducts(trendingCollection) {
      return productsStore && productsStore.length && productsStore.map((product) => {
        const {
          trending, collection, url, title, longDescription,
          shortDescription, colors, price, trends, _id,
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
              key={_id}
              _id={_id}
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
  }, [productsStore]);

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <img
          className={styles.coverPage}
          src={coverPage}
          alt="Flowers as a gift"
        />
        <div className={styles.captionHeader}>
          <h1 className={styles.headerTitle}>
            Something special
            <br />
            for someone unique
          </h1>
          <h2 className={styles.headerSubtitle}>{`It's time to give smiles`}</h2>
        </div>
      </div>
      <section className={styles.advertisementContainer}>
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
        <h2 className={styles.collectionHeader}>Best-selling Colorful Bouquets</h2>
        <div className={styles.gridWrapper}>
          {colorfulCollection}
          <div className={styles.subWrapper} />
        </div>
      </section>
      <section className={styles.features}>
        <h2 className={styles.featuresSubTitle}>Our services</h2>
        <div className={styles.featuresWrapper}>
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
      <section className={styles.advertisementContainer}>
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
        <h2 className={styles.collectionHeader}>Best-selling Light Bouquets</h2>
        <div className={styles.gridWrapper}>
          {lightCollection}
          <div className={styles.subWrapper} />
        </div>
      </section>
    </div>
  );
}

function mapStateTopProps(state) {
  return {
    productsStore: state.products.products,
  }
}

export default connect(mapStateTopProps, null)(Home);
