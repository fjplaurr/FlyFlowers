export const priceActionType = 'changeProductPrice';

const changeProductPrice = (price) => ({
  type: priceActionType,
  payload: price,
});

export default changeProductPrice;
