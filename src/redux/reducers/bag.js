import { ADD_TO_BAG, DELETE_FROM_BAG } from '../constants/actionTypes';

export default function bag(itemsInBag = [], action) {
  switch (action.type) {
    case ADD_TO_BAG: {
      if (
        itemsInBag.findIndex(
          (item) => item.product._id === action.product._id,
        ) !== -1
      ) {
        const newbag = [...itemsInBag];
        const index = newbag.findIndex(
          (product) => product.product._id === action.product._id,
        );
        // quantity is the number of units of the product
        newbag[index].quantity = action.quantity;
        return newbag;
      }
      return [...itemsInBag, { product: action.product, quantity: 1 }];
    }
    case DELETE_FROM_BAG: {
      const newbag = [...itemsInBag];
      // payload is the id of the product
      const index = newbag.findIndex(
        (item) => item.product._id === action.payload,
      );
      newbag.splice(index, 1);
      return newbag;
    }
    default:
      return itemsInBag;
  }
}
