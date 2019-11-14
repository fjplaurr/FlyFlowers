import { INCREASEBILLING } from '../constants/actionTypes';

export default function increaseBilling(product) {
  return {
    type: INCREASEBILLING,
    payload: product,
  };
}
