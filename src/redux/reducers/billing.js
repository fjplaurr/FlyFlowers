import { INCREASEBILLING, DECREASEBILLING } from '../constants/actionTypes';

export default function billing(state = 0, action) {
  switch (action.type) {
    case INCREASEBILLING: {
      return state + action.payload;
    }
    case DECREASEBILLING: {
      return state - action.payload;
    }
    default:
      return state;
  }
}
