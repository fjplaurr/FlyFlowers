import React from 'react';
import './Home.scss';
import { FaBirthdayCake, FaHeart, FaHome } from 'react-icons/fa';
import { GiFlowerPot } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import coverPage from '../images/coverPage.png';
import winterBouq from '../images/winterBouq.jpg';
import springBouq from '../images/springBouq.jpg';
import decorate from '../images/decorate.jpg';

function Home() {
  return (
    <div className="Home">
      <div className="wrapperCoverPage">
        <img
          className="coverPage"
          src={coverPage}
          alt="Flowers as a gift"
        />
      </div>
      <div className="gridProducts">
        <div className="bouqWrapper">
          <img
            src={winterBouq}
            className="imgGrid"
            alt="Winter Bouquet"
          />
          <div
            className="caption"
          >
            <h1>Winter collection</h1>
            <h2>Sddadsdasd</h2>
          </div>
        </div>
        <div className="bouqWrapper">
          <img
            src={springBouq}
            className="imgGrid"
            alt="spring Bouquet"
          />
          <div className="caption">
            <h1>Spring collection</h1>
            <h2>Sddadsdasd</h2>
          </div>
        </div>
        <div className="services">
          <Link
            to="/shop"
          >
            <FaBirthdayCake />
            <p>Birthday</p>
          </Link>
          <Link
            to="/shop"
          >
            <FaHeart />
            <p>Love</p>
          </Link>
          <Link
            to="/shop"
          >
            <FaHome />
            <p>Decoration</p>
          </Link>
          <Link
            to="/shop"
          >
            <GiFlowerPot />
            <p>Plants</p>
          </Link>
        </div>
        <div className="bouqWrapper">
          <img
            src={decorate}
            className="imgGrid"
            alt="Three vases with flowers"
          />
          <div className="caption">
            <h1>Decorate your home. Decorate your business.</h1>
          </div>
          <Footer />

        </div>
      </div>
    </div>
  );
}

export default Home;
