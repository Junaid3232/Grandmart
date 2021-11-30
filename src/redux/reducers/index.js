import { combineReducers } from 'redux'
import coordinatesReducer from './coordinatesReducer'
import CartReducer from './cartReducer';

const rootReducer = combineReducers({
    coordinates: coordinatesReducer,
    cart: CartReducer,

})

export default rootReducer;