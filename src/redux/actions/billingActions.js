import { INCREASE_BILLING , DECREASE_BILLING } from '../constants/actionTypes';

export function increaseBilling(product) {
  return {
    type: INCREASE_BILLING,
    payload: product,
  };
}

export function decreaseBilling(product) {
  return {
    type: DECREASE_BILLING,
    payload: product,
  };
}
