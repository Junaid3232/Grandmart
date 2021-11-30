import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/actionTypes";
const initalState = {
    cartItems: []
}

const CartReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state
    }
}
export default CartReducer;