import { ADD_TO_BAG } from '../constants/actionTypes';

const addToBag = (productId, quantity) => ({
  type: ADD_TO_BAG,
  productId,
  quantity,
});

export default addToBag;
