import { pictureActionType } from '../actions/changeProductPicture';

export default function picture(state = 22, action) {
  switch (action.type) {
    case pictureActionType: {
      return action.payload;
    }
    default:
      return state;
  }
}
