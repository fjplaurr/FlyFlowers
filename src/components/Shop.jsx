import React from 'react';
import './Shop.scss';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function importAll(r) {
  const images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

function Shop() {
  const images = importAll(require.context('../images', false, /\d.(png|jpe?g)$/));
  const compon = Object.keys(images).map((key) =>
    <li className="card">
      <div
        className="imageWrapper"
        style={{ backgroundImage: `url(${images[key]})` }}
      />
      <div className="infoProduct">
        <div
          className="textCard"
        >
          <p>Lorem ipsum dolor sit amet</p>
          <p>
            {Math.floor(Math.random() * (50 - 10)) + 10}€
          </p>
        </div>
        <div
          className="modifyBag"
        >
          <p>Add to bag</p>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
      </div>
    </li>);
  return (
    <div className="gridWrapper">{compon}</div>
  );
}

export default Shop;
