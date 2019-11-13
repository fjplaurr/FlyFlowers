import { createStore, combineReducers } from 'redux';
import bag from './reducers/bag';

const reducer = combineReducers({
  bag,
});

// eslint-disable-next-line max-len
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
