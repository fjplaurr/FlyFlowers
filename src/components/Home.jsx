import React from 'react';
import './Home.scss';
import ProductCard from './ProductCard';
import Advertisment from './Advertisment';
import coverPage from '../images/coverPage.jpg';
import lightColorImg from '../images/lightColorImg.jpg';
import colorfulImg from '../images/colorfulImg.jpg';
import dataArr from '../utils/data';
import rocket from '../images/rocket.svg';
import calendar from '../images/calendar.svg';
import flower from '../images/flower.svg';
import FeatureCard from './FeatureCard';

function getTrendingProducts(arr, trendingCollection) {
  return arr.map((product) => {
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

function Home() {
  const lightCollection = getTrendingProducts(dataArr, 'light');
  const colorfulCollection = getTrendingProducts(dataArr, 'colorful');
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
            featureImg={rocket}
            imgDescript="fast delivery"
            title="Two-days delivery"
          />
          <FeatureCard
            featureDescript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget adipiscing eleifend laoreet rper non."
            featureImg={flower}
            imgDescript="fresh flowers"
            title="Guaranteed fresh"
          />
          <FeatureCard
            featureDescript="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget adipiscing eleifend laoreet lorem malesuada varius. Aliquam commodo ullamcorper non ."
            featureImg={calendar}
            imgDescript="precise delivery date"
            title="Precise delivery date"
          />
        </div>
      </section>
      <div className="gridProducts">
        <Advertisment imageUrl={colorfulImg} imageClass="colorfulImg" imageAlt="Spring Bouquet" />
        <h2 className="collectionHeader">Best-selling Colorful Bouquets</h2>
        <div className="gridWrapper">
          {colorfulCollection}
          <div className="subWrapper" />
        </div>
        <Advertisment imageUrl={lightColorImg} imageClass="lightColorImg" imageAlt="Winter Bouquet" />
        <h2 className="collectionHeader">Best-selling Light Bouquets</h2>
        <div className="gridWrapper">
          {lightCollection}
          <div className="subWrapper" />
        </div>
      </div>
    </div>
  );
}

export default Home;
