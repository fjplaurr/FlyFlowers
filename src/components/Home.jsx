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
import { GoChevronRight } from "react-icons/go";

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
        <div className="productCollection">
          <img
            src={winterBouq}
            className="imgGrid"
            alt="Winter Bouquet"
          />
          <div className="caption winterCollection">
            <h1>Winter Collection.</h1>
            <h2>Boost your Christmas spirit.</h2>
            <Link to="/shop">
              Discover it
              <GoChevronRight />
            </Link>
          </div>
        </div>
        <div className="productCollection">
          <img
            src={springBouq}
            className="imgGrid"
            alt="spring Bouquet"
          />
          <div className="caption springCollection">
            <h1>Spring Collection.</h1>
            <h2>Vivid colors to find inspiration.</h2>
            <Link to="/shop">
              Discover it
              <GoChevronRight />
            </Link>
          </div>
        </div>
        <div className="services">
          <Link to="/shop">
            <FaBirthdayCake />
            <p>Birthday</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </Link>
          <Link to="/shop">
            <FaHeart />
            <p>Love</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </Link>
          <Link to="/shop">
            <FaHome />
            <p>Decoration</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </Link>
          <Link to="/shop">
            <GiFlowerPot />
            <p>Plants</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </Link>
        </div>
        <div className="productCollection">
          <img
            src={decorate}
            className="imgGrid"
            alt="Three vases with flowers"
          />
          <div className="caption decorationCollection">
            <h1>Spring Collection.</h1>
            <h2>Decorate your home. Decorate your business.</h2>
            <Link to="/shop">
              Discover it
              <GoChevronRight />
            </Link>
          </div>
          <Footer />

        </div>
      </div>
    </div>
  );
}

export default Home;
