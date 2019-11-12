import { idActionType } from '../actions/addIdToBag';

export default function productId(state = '7', action) {
  switch (action.type) {
    case idActionType: {
      return action.payload;
    }
    default:
      return state;
  }
}
