function filterByCollection(products, collectionName) {
  if (!Array.isArray(products)) {
    return [];
  }

  return products.filter((product) => product.collection === collectionName);
}

function filterByBestSellers(products) {
  if (!Array.isArray(products)) {
    return [];
  }

  return products.filter((product) => product.trending);
}

function filterByBestSellersAndCollection(products, collectionName) {
  const bestSellers = filterByBestSellers(products);

  return filterByCollection(bestSellers, collectionName);
}

export { filterByBestSellersAndCollection };
