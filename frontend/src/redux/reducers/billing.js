import { INCREASE_BILLING, DECREASE_BILLING } from '../constants/actionTypes';

export default function billing(state = 0, action) {
  switch (action.type) {
    case INCREASE_BILLING: {
      return state + action.payload;
    }
    case DECREASE_BILLING: {
      return state - action.payload;
    }
    default:
      return state;
  }
}
