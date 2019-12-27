import { DELETEFROMBAG } from '../constants/actionTypes';

export default function deleteFromBag(product) {
  return {
    type: DELETEFROMBAG,
    payload: product,
  };
}
