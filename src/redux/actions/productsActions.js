import store from '../store';
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '../constants/actionTypes';
import { products } from '../../data';

const fetchProducts = async () => {
  try {
    store.dispatch(fetchProductsStart());
    store.dispatch(fetchProductsSuccess());
  } catch (error) {
    store.dispatch(fetchProductsError(error));
  }
};

const fetchProductsSuccess = () => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

const fetchProductsStart = () => ({
  type: FETCH_PRODUCTS_START,
});

const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error,
});

export default fetchProducts;
