export const pictureActionType = 'changeProductPicture';

const changeProductPicture = (url) => ({
  type: pictureActionType,
  payload: url,
});

export default changeProductPicture;
