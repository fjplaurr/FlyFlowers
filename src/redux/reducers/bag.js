import { ADDTOBAG } from '../constants/actionTypes';

export default function bag(state, action) {
  if (typeof (state) === 'undefined') {
    return [];
  }
  switch (action.type) {
    case ADDTOBAG: {
      if (state && state.findIndex((x) => x.id === action.payload) !== -1) {
        const newState = [...state];
        const index = newState.findIndex((product) => product.id === action.payload);
        newState[index].quantity += 1;
        return newState;
      }
      return [...state, { id: action.payload, quantity: 1 }];
    }
    default:
      return state;
  }
}
