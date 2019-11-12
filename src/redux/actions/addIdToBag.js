export const idActionType = 'addIdToBag';

const addIdToBag = (id) => ({
  type: idActionType,
  payload: id,
});

export default addIdToBag;
