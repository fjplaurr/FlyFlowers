import { createStore, combineReducers } from 'redux';
import bag from './reducers/bag';
import billing from './reducers/billing';
import products from './reducers/products';

const reducer = combineReducers({
  bag,
  billing,
  products,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
