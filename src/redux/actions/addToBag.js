import { ADDTOBAG } from '../constants/actionTypes';

const addToBag = (productId, quantity) => ({
  type: ADDTOBAG,
  productId,
  quantity,
});

export default addToBag;
