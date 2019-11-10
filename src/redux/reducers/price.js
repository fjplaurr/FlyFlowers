import { priceActionType } from '../actions/changeProductPrice';

export default function price(state = 22, action) {
  switch (action.type) {
    case priceActionType: {
      return action.payload;
    }
    default:
      return state;
  }
}
