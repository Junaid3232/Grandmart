import { SET_COORDINATES, ADD_TO_CART, REMOVE_TO_CART } from "./actionTypes"
export const setCoordinates = (coordinates) => {
    return {
        type: SET_COORDINATES,
        payload: coordinates
    }
}

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeToCart = (item) => {
    return {
        type: REMOVE_TO_CART,
    }
}