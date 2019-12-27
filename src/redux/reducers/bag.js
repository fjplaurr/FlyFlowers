import { ADDTOBAG, DELETEFROMBAG } from '../constants/actionTypes';

export default function bag(state, action) {
  if (typeof (state) === 'undefined') {
    return [];
  }
  switch (action.type) {
    case ADDTOBAG: {
      if (state && state.findIndex((x) => x.id === action.productId) !== -1) {
        const newState = [...state];
        const index = newState.findIndex((product) => product.id === action.productId);
        newState[index].quantity = action.quantity;
        return newState;
      }
      return [...state, { id: action.productId, quantity: 1 }];
    }
    case DELETEFROMBAG: {
      const newState = [...state];
      const index = newState.findIndex((product) => product.id === action.payload);
      newState.splice(index, 1);
      return newState;
    }
    default:
      return state;
  }
}
