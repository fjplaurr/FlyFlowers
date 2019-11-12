import { createStore, combineReducers } from 'redux';
import price from './reducers/price';
import picture from './reducers/picture';
import productId from './reducers/productId';

const reducer = combineReducers({
  price,
  picture,
  productId,
});

// eslint-disable-next-line max-len
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
