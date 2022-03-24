import {combineReducers} from 'redux';
import { productReducers } from './productsReducers';
import {cartReducers} from './cartReducers';

const rootReducer = combineReducers({
    products: productReducers,
    cart: cartReducers
});

export default rootReducer;