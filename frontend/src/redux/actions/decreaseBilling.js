import { DECREASE_BILLING } from '../constants/actionTypes';

export default function decreaseBilling(product) {
  return {
    type: DECREASE_BILLING,
    payload: product,
  };
}
