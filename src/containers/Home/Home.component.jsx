import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './Home.module.scss';
import Advertisement from './Advertisement';
import BestSellers from './BestSellers';
import {
  colorfulImg,
  coverPage,
  lightColorImg,
  Rocket,
  Calendar,
  Flower,
} from '../../assets';
import FeatureCard from './FeatureCard';
import fetchProducts from '../../redux/actions/productsActions';
import variables from '../../variables.scss';
import { filterByBestSellersAndCollection } from './helpers';

const Home = ({ productsStore, history }) => {
  // fetch products first time it renders if they are not in the store
  useEffect(() => {
    if (!productsStore.length) {
      fetchProducts();
    }
  }, []);

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
          <h2 className={styles.headerSubtitle}>Flowers that inspire</h2>
        </div>
      </div>
      <section className={styles.features}>
        <h2 className={styles.featuresSubTitle}>We offer you our services</h2>
        <div className={styles.featuresWrapper}>
          <FeatureCard
            description="Swift and reliable delivery, with bouquets arriving in just two days to brighten your day or surprise a loved one."
            featureSvg={Rocket}
            title="Two-days delivery"
          />
          <FeatureCard
            description="Meticulously handcrafted bouquets with the freshest and most vibrant blooms, ensuring long-lasting beauty and fragrance."
            featureSvg={Flower}
            title="Guaranteed fresh"
          />
          <FeatureCard
            description="Never miss a special moment again. Schedule the exact arrival of your floral masterpiece for the perfect heartfelt gift."
            featureSvg={Calendar}
            title="Precise delivery date"
          />
        </div>
      </section>
      <section>
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
      </section>
      <section>
        <BestSellers
          title="Best-selling Colorful Bouquets"
          collection={filterByBestSellersAndCollection(
            productsStore,
            'colorful',
          )}
        />
      </section>
      <section>
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
      </section>
      <section>
        <BestSellers
          title="Best-selling Light Bouquets"
          collection={filterByBestSellersAndCollection(productsStore, 'light')}
        />
      </section>
    </div>
  );
};

function mapStateTopProps(state) {
  return {
    productsStore: state.products.products,
  };
}

export default connect(mapStateTopProps, null)(Home);
