import * as storageService from '../services/storageService';

const user = storageService.getLocalStorage();

let initialState = {
    isLoggedIn: false,
    user: null,
    error: null,
    isLoading: false,

};

export function userAuthReducers(state = initialState, action) {

    switch (action.type) {
        case "FETCH_USER":
            return {
                ...initialState,
                isLoading: true
            };

        case "FETCH_USER_SUCCESS":

            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                error: null,
                isLoading: false

            };

        case "FETCH_USER_ERROR":

            return {

                ...state,

                isLoggedIn: false,

                user: null,

                error: action.error,

                isLoading: false

            };

        case "LOGOUT":

            return {
                ...state,
                isLoading: true,
            }

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isLoading: false,
                user: null,
                error: null,
                isLoggedIn: false

            }

        case 'LOGOUT_ERROR':
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }

        default:

            return state

    }

}
