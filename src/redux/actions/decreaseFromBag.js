import { DECREASEFROMBAG } from '../constants/actionTypes';

export default function decreaseFromBag(product) {
  return {
    type: DECREASEFROMBAG,
    payload: product,
  };
}
