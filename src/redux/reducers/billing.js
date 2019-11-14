import { INCREASEBILLING, DECREASEBILLING } from '../constants/actionTypes';

export default function billing(state = 0, action) {
  console.log('what the');
  switch (action.type) {
    case INCREASEBILLING: {
      console.log('fuck');
      return state + action.payload;
    }
    case DECREASEBILLING: {
      return state - action.payload;
    }
    default:
      return state;
  }
}
