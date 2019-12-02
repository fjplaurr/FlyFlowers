import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import './Shop.scss';
import ProductCard from './ProductCard';
import coverPage from '../images/coverPage.jpg';
import lightColorImg from '../images/lightColorImg.jpg';
import colorfulImg from '../images/colorfulImg.jpg';
import dataArr from '../utils/data';
import rocket from '../images/rocket.svg';
import calendar from '../images/calendar.svg';
import flower from '../images/flower.svg';

function Home() {
  const lightCollection = dataArr.map((x) => {
    if (x.collection === 'light' && x.trending === true) {
      return (
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
      );
    }
    return false;
  });
  const colorfulCollection = dataArr.map((x) => {
    if (x.collection === 'colorful' && x.trending === true) {
      return (
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
      );
    }
    return false;
  });

  return (
    <div className="home">
      <div className="header">
        <img
          className="coverPage"
          src={coverPage}
          alt="Flowers as a gift"
        />
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
        <div className="featureWrapper">
          <img src={rocket} alt="fast delivery" />
          <h3>Two-days delivery</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget adipiscing eleifend laoreet lorem malesuada varius. Aliquam commodo ullamcorper non odio facilisis viverra dolor.</p>
        </div>
        <div className="featureWrapper">
          <img src={flower} alt="fresh flowers" />
          <h3>Guaranteed fresh</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget adipiscing eleifend laoreet lorem malesuada varius.</p>
        </div>
        <div className="featureWrapper">
          <img src={calendar} alt="precise delivery date" />
          <h3>Precise delivery date</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget adipiscing eleifend laoreet lorem. Aliquam commodo ullamcorper non odio facilisis viverra dolor.</p>
        </div>
      </section>
      <div className="gridProducts">
        <article className="colorfulCollection">
          <div className="productCollection">
            <img
              src={colorfulImg}
              className="colorfulImg"
              alt="spring Bouquet"
            />
            <div className="caption">
              <h1 className="colorfulTitle">Colorful Collection</h1>
              <h2 className="colorfulSubTitle">Vivid colors that inspire</h2>
              <Link to="/shop">
                <button type="button">
                  Discover it
                </button>
              </Link>
            </div>
          </div>
          <h2 className="collectionHeader">Best-selling Colorful Bouquets</h2>
          <div className="gridWrapper">
            {colorfulCollection}
            <div className="subWrapper" />
          </div>
        </article>
        <article className="lightCollection">
          <div className="productCollection">
            <img
              src={lightColorImg}
              className="lightColorImg"
              alt="Winter Bouquet"
            />
            <div className="caption">
              <h1 className="lightTitle">Light Collection</h1>
              <h2 className="lightSubTitle">Full of elegance</h2>
              <Link to="/shop">
                <button type="button">
                  Discover it
                </button>
              </Link>
            </div>
          </div>
          <h2 className="collectionHeader">Best-selling Light Bouquets</h2>
          <div className="gridWrapper">
            {lightCollection}
            <div className="subWrapper" />
          </div>
        </article>
      </div>
    </div>
  );
}

export default Home;
