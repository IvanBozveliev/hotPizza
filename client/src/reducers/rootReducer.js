import { combineReducers } from 'redux';
import { productReducers } from './productsReducers';
import { cartReducers } from './cartReducers';
import { userAuthReducers } from './userAuthReducers';
import { reducerUsers } from './userReducers';
import { feedbackReducer } from './feedbackReducers';

const rootReducer = combineReducers({
    products: productReducers,
    cartProducts: cartReducers,
    auth: userAuthReducers,
    users: reducerUsers,
    feedback: feedbackReducer

});

export default rootReducer;