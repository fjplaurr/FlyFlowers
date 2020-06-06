import { ADD_TO_BAG, DELETE_FROM_BAG } from '../constants/actionTypes';

export default function bag(state = [], action) {
  switch (action.type) {
    case ADD_TO_BAG: {
      if (state && state.findIndex((x) => x._id === action.productId) !== -1) {
        const newState = [...state];
        const index = newState.findIndex((product) => product._id === action.productId);
        newState[index].quantity = action.quantity;
        return newState;
      }
      return [...state, { id: action.productId, quantity: 1 }];
    }
    case DELETE_FROM_BAG: {
      const newState = [...state];
      const index = newState.findIndex((product) => product._id === action.payload);
      newState.splice(index, 1);
      return newState;
    }
    default:
      return state;
  }
}
