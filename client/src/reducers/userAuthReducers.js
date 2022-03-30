import * as storageService from '../services/storageService';
const user = storageService.getLocalStorage();

let initialState = user ? {isLoggedIn: true, user, error: null} : {isLoggedIn: false, user: null, error: null}

export function userAuthReducers(state = initialState, action) {

    switch (action.type) {
        case "FETCH_USER":
           return{
               ...state,
               isLoggedIn: false,
               user: null,
               error: null
           }
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
               isLoggedIn: true,
               user: action.payload,
               error: null
            };
        case "FETCH_USER_ERROR":
            return {
               ...state,
               isLoggedIn: false,
               user: null,
               error: action.error
            };
        case "LOGOUT": 
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                error: null
            }
        default:
            return state
    }

}
