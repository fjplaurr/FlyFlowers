import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../constants/actionTypes';

const initialState = {
  products: [],
  loading: false,
  error: null,
}

const products = (state = initialState, action) => {
  console.log('action isss')
  console.log(action)
  console.log('action.payload isssss')
  console.log(action.payload)
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return { ...state }
  }
}

export default products;
