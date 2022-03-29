import * as storageService from '../services/storageService';
const user = storageService.getLocalStorage();

let initialState = user ? {isLoggedIn: true, user} : {isLoggedIn: false, user: null}

export function userAuthReducers(state = initialState, action) {

    switch (action.type) {
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
               isLoggedIn: true,
               user: action.payload
            };
        case "FETCH_USER_ERROR":
            return {
               ...state,
               isLoggedIn: false,
               user: null
            };
        case "LOGOUT": 
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        default:
            return state
    }

}
