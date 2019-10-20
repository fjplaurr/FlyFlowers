import React from 'react';
import './Home.scss';
import coverPage from '../images/coverPage.png';
import winterBouq from '../images/winterBouq.jpg';
import springBouq from '../images/springBouq.jpg';
import decorate from '../images/decorate.jpg';
import { faBirthdayCake, faHeart, faHome, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';

function Home() {
  return (
    <div className="Home">
      <div className="wrapperCoverPage">
        <img className="coverPage" src={coverPage}>
        </img>
      </div>
      <div className="gridProducts">
        <div className="bouqWrapper">
          <img
            src={winterBouq}
            className="imgGrid"
            alt="Winter Bouquet"
          />
          <div
            className="caption">
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
          <div
            className="caption">
            <h1>Spring collection</h1>
            <h2>Sddadsdasd</h2>
          </div>
        </div>
        <div
          className="services">
          <a>
            <FontAwesomeIcon icon={faBirthdayCake} />
            <p>Birthday</p>
          </a>
          <a>
            <FontAwesomeIcon icon={faHeart} />
            <p>Love</p>
          </a>
          <a>
            <FontAwesomeIcon icon={faHome} />
            <p>Decoration</p>
          </a>
          <a>
            <FontAwesomeIcon icon={faSeedling} />
            <p>Plants</p>
          </a>
        </div>
        <div className="bouqWrapper">
          <img
            src={decorate}
            className="imgGrid"
            alt="Three vases with flowers"
          />
          <div
            className="caption">
            <h1>Decorate your home. Decorate your business.</h1>
          </div>
          <Footer />

        </div>
      </div>
    </div >
  );
}

export default Home;
