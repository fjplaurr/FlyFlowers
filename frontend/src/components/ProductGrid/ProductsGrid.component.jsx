import React from 'react';
import ProductCard from '../ProductCard';
import './ProductsGrid.scss';

const ProductsGrid = ({ items = [] }) => {
  return (
    <div className="productsWrapper">
      <h1 className="pageTitle">Search your flowers</h1>
      <div className="gridWrapper">
        {items.map((item) => (
          <ProductCard
            url={item.url}
            title={item.title}
            longDescription={item.longDescription}
            shortDescription={item.shortDescription}
            colors={item.colors}
            price={item.price}
            trends={item.trends}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
