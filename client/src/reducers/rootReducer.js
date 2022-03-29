import {combineReducers} from 'redux';
import { productReducers } from './productsReducers';
import {cartReducers} from './cartReducers';
import { userAuthReducers } from './userAuthReducers';

const rootReducer = combineReducers({
    myProducts: productReducers,
    cartProducts: cartReducers,
    auth: userAuthReducers

});

export default rootReducer;