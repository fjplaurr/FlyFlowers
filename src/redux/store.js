import { createStore, combineReducers } from 'redux';
import price from './reducers/price';
import picture from './reducers/picture';

const reducer = combineReducers({
    price,
    picture,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;   