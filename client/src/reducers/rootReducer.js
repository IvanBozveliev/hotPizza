import {combineReducers} from 'redux';
import { productReducers } from './productsReducers';
import {cartReducers} from './cartReducers';
import { userAuthReducers } from './userAuthReducers';
import {messageReducer} from './messageReducer';
import { reducerUsers } from './userReducers';

const rootReducer = combineReducers({
    myProducts: productReducers,
    cartProducts: cartReducers,
    auth: userAuthReducers,
    users: reducerUsers,
    messageReducer
});

export default rootReducer;