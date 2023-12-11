import { ADD_TO_BAG, DELETE_FROM_BAG } from '../constants/actionTypes';

export default function bag(itemsInBag = [], action) {
  switch (action.type) {
    case ADD_TO_BAG: {
      const index = itemsInBag.findIndex(
        (item) => item.product._id === action.product._id,
      );

      if (index !== -1) {
        const newBag = [...itemsInBag];
        newBag[index].quantity = action.quantity;
        return newBag;
      }

      return [...itemsInBag, { product: action.product, quantity: 1 }];
    }

    case DELETE_FROM_BAG: {
      // payload is the id of the product
      const newBag = itemsInBag.filter(
        (item) => item.product._id !== action.payload,
      );
      return newBag;
    }

    default:
      return itemsInBag;
  }
}
