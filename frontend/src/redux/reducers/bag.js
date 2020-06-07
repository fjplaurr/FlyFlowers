import { ADD_TO_BAG, DELETE_FROM_BAG } from '../constants/actionTypes';

export default function bag(bag = [], action) {
  switch (action.type) {
    case ADD_TO_BAG: {
      console.log('typeoff')
      console.log(typeof(action.quantity))
      console.log(bag.findIndex((item) => item._id === action.productId))
      if (bag && bag.findIndex((item) => item._id === action.productId) !== -1) {
        const newbag = [...bag];
        const index = newbag.findIndex((product) => product._id === action.productId);
        newbag[index].quantity = action.quantity;
        return newbag;
      } else {
        return [...bag, { _id: action.productId, quantity: 1 }];
      }
    }
    case DELETE_FROM_BAG: {
      const newbag = [...bag];
      const index = newbag.findIndex((product) => product._id === action.payload);
      newbag.splice(index, 1);
      return newbag;
    }
    default:
      return bag;
  }
}
