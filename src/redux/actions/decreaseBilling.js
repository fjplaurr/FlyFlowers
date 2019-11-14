import { DECREASEBILLING } from '../constants/actionTypes';

export default function decreaseBilling(product) {
  return {
    type: DECREASEBILLING,
    payload: product,
  };
}
