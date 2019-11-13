import { ADDTOBAG } from '../constants/actionTypes';

const addToBag = (product) => ({
  type: ADDTOBAG,
  payload: product,
});

export default addToBag;
