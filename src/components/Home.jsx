import React from 'react';
import './Home.scss';
import { FaBirthdayCake, FaHeart } from 'react-icons/fa';
import { GoChevronRight, GoHome } from 'react-icons/go';
import { FiTruck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Shop.scss';
import ProductCard from './ProductCard';
import coverPage from '../images/coverPage.jpg';
import winterBouq from '../images/winterBouq.jpg';
import springBouq from '../images/springBouq.jpg';
import dataArr from '../utils/data';

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
    <div className="Home">
      <div className="header">
        <img
          className="coverPage"
          src={coverPage}
          alt="Flowers as a gift"
        />
        <div className="captionHeader">
          <h1>
            Something special.
            <br />
            Someone unique.
          </h1>
          <Link to="/shop">
            Explore
            <GoChevronRight />
          </Link>
        </div>
      </div>

      <div className="gridProducts">
        <article className="colorfulCollection">
          <div className="productCollection">
            <img
              src={springBouq}
              className="springBouquet"
              alt="spring Bouquet"
            />
            <div className="caption">
              <h1>Colorful Collection.</h1>
              <h2>Vivid colors that inspire.</h2>
              <Link to="/shop">
                Discover it
                <GoChevronRight />
              </Link>
            </div>
          </div>
          <h2 className="collectionHeader">Trending Colorful Bouquets</h2>
          <div className="gridWrapper">
            {colorfulCollection}
            <div className="subWrapper" />
          </div>
        </article>
        <article className="lightCollection">
          <div className="productCollection">
            <img
              src={winterBouq}
              className="winterBouquet"
              alt="Winter Bouquet"
            />
            <div className="caption">
              <h1>Light Collection.</h1>
              <h2>Full of elegance.</h2>
              <Link to="/shop">
                Discover it
                <GoChevronRight />
              </Link>
            </div>
          </div>
          <h2 className="collectionHeader">Trending Light Bouquets</h2>
          <div className="gridWrapper">
            {lightCollection}
            <div className="subWrapper" />
          </div>
        </article>

      </div>
      <section className="trends">
        <h2 className="collectionHeader">Discover our trends</h2>
        <div className="services">
          <Link to="/shop?occasion=birthday">
            <FaBirthdayCake />
            <p>Birthday</p>
            <p>An occasion to celebrate with colorful flowers.</p>
          </Link>
          <Link to="/shop?occasion=love">
            <FaHeart />
            <p>Love</p>
            <p>Give something special to someone unique.</p>
          </Link>
          <Link to="/shop?occasion=decoration">
            <GoHome />
            <p>Decoration</p>
            <p>Decorate your home, decorate your business.</p>
          </Link>
          <Link to="/shop?occasion=fastdelivery">
            <FiTruck />
            <p>Fast delivery</p>
            <p>Products to be delivered the next day.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
