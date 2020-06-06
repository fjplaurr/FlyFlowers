import { DELETE_FROM_BAG } from '../constants/actionTypes';

export default function deleteFromBag(product) {
  return {
    type: DELETE_FROM_BAG,
    payload: product,
  };
}
