import store from '../store';
import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../constants/actionTypes';

const fetchProducts = async (products) => {
  try {
    store.dispatch(fetchProductsStart());
    const response = await fetch('/api/flowers');
    products = await response.json();
    store.dispatch(fetchProductsSuccess(products));
  } catch (error) {
    store.dispatch(fetchProductsError(error));
  }
}

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
})

const fetchProductsStart = () => ({
  type: FETCH_PRODUCTS_START,
});

const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error,
});

export default fetchProducts;
