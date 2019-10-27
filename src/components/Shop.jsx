import React from 'react';
import ProductCard from './ProductCard';

function importAll(r) {
  const images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

function Shop() {
  const images = importAll(require.context('../images', false, /\d.(png|jpe?g)$/));
  const compon = Object.keys(images).map((key) => <ProductCard url={images[key]} key={key} />);
  return (
    <div className="gridWrapper">{compon}</div>
  );
}

export default Shop;
