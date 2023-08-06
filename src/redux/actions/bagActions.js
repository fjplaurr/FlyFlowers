import { ADD_TO_BAG } from '../constants/actionTypes';
import { DELETE_FROM_BAG } from '../constants/actionTypes';

export function addToBag(product, quantity) {
  return {
    type: ADD_TO_BAG,
    product,
    quantity,
  }
};

export function deleteFromBag(product) {
  return {
    type: DELETE_FROM_BAG,
    payload: product,
  };
}
