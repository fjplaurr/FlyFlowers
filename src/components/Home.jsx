import React from 'react';
import './Home.scss';
import { FaBirthdayCake, FaHeart } from 'react-icons/fa';
import { GiFlowerPot } from 'react-icons/gi';
import { GoChevronRight, GoHome } from "react-icons/go";
import { FiTruck } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './Shop.scss';
import Footer from './Footer';
import ProductCard from './ProductCard';
import coverPage from '../images/coverPage.jpg';
import winterBouq from '../images/winterBouq.jpg';
import springBouq from '../images/springBouq.jpg';
import flyFlowersLogo from '../images/flyFlowersLogo.svg';
import dataArr from '../utils/data';

function Home() {
  let lightCollection = dataArr.map((x) => {
    if (x.collection === 'light' && x.trending === true) {
      return (
        <ProductCard
          url={x.url}
          title={x.title}
          longDescription={x.longDescription}
          shortDescription={x.shortDescription}
          colors={x.colors} price={x.price}
          trends={x.trends}
          key={x.id}
        />
      )
    }
  });
  let colorfulCollection = dataArr.map((x) => {
    if (x.collection === 'colorful' && x.trending === true) {
      return (
        <ProductCard
          url={x.url}
          title={x.title}
          longDescription={x.longDescription}
          shortDescription={x.shortDescription}
          colors={x.colors} price={x.price}
          trends={x.trends}
          key={x.id}
        />
      )
    }
  });

  return (
    <div className="Home">
      <div className="wrapperCoverPage">
        <div className="leftDiv">
          <h1>
            Give something real.
            <br />
            Give it with love.
          </h1>
          <img
            className="companyLogo"
            src={flyFlowersLogo}
            alt="Company logo"
          />
        </div>
        <img
          className="coverPage"
          src={coverPage}
          alt="Flowers as a gift"
        />
      </div>
      <section className="trends">
        <h2 className="collectionHeader">Discover our trends</h2>
        <div className="services">
          <Link to="/shop">
            <FaBirthdayCake />
            <p>Birthday</p>
            <p>An occasion to celebrate with colorful flowers.</p>
          </Link>
          <Link to="/shop">
            <FaHeart />
            <p>Love</p>
            <p>Give something special to someone unique.</p>
          </Link>
          <Link to="/shop">
            <GoHome />
            <p>Decoration</p>
            <p>Decorate your home, decorate your business.</p>
          </Link>
          <Link to="/shop">
            <GiFlowerPot />
            <p>Plants</p>
            <p>Water them and see them grow.</p>
          </Link>
          <Link to="/shop">
            <FiTruck />
            <p>Fast delivery</p>
            <p>Products to be delivered the next day.</p>
          </Link>
        </div>
      </section>
      <div className="gridProducts">
        <article className="lightCollection">
          <div className="productCollection">
            <img
              src={winterBouq}
              className="imgGrid"
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
            <div className="subWrapper">
            </div>
          </div>
        </article>
        <article className="colorfulCollection">
          <div className="productCollection">
            <img
              src={springBouq}
              className="imgGrid"
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
            <div className="subWrapper">
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
