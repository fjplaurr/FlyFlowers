export const priceActionType = 'changeProductPrice';

const changeProductPrice = price => {
    return {
        type: priceActionType,
        payload: price,
    }
}

export default changeProductPrice;