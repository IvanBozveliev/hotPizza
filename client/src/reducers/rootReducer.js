import {combineReducers} from 'redux';
import { productReducers } from './productsReducers';
import {cartReducers} from './cartReducers';

const rootReducer = combineReducers({
    myProducts: productReducers,
    cartProducts: cartReducers
});

export default rootReducer;