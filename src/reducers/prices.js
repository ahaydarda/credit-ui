export const LOAD_PRICES = "LOAD_PRICES";
export const CHANGE_COMPARE_ORDER = "CHANGE_COMPARE_ORDER";
export const CHANGE_COMPARER = "CHANGE_COMPARER";
export const UPDATE_PRICE = "UPDATE_PRICE";


export default (state, action) => {
    switch (action.type) {
        case LOAD_PRICES:
            return {...state, prices: action.payload}
        case CHANGE_COMPARE_ORDER:
            return {...state,compareOrder: action.payload}
        case UPDATE_PRICE:
            return {...state, prices: action.payload}
        default:
            return state;
    }
}
