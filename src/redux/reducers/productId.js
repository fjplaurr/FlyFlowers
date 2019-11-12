import { idActionType } from '../actions/addIdToBag';

export default function productId(state = [], action) {
  switch (action.type) {
    case idActionType: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
