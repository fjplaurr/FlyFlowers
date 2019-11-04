export const pictureActionType = 'changeProductPicture';

const changeProductPicture = url => {
    return {
        type: pictureActionType,
        payload: url,
    }
}

export default changeProductPicture;