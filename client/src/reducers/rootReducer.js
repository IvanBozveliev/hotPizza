import {combineReducers} from 'redux';
import { productReducers } from './productsReducers';
import {cartReducers} from './cartReducers';
import { userAuthReducers } from './userAuthReducers';
import {messageReducer} from './messageReducer';

const rootReducer = combineReducers({
    myProducts: productReducers,
    cartProducts: cartReducers,
    auth: userAuthReducers,
    messageReducer
});

export default rootReducer;