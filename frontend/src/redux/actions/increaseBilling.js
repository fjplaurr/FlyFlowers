import { INCREASE_BILLING } from '../constants/actionTypes';

export default function increaseBilling(product) {
  return {
    type: INCREASE_BILLING,
    payload: product,
  };
}
