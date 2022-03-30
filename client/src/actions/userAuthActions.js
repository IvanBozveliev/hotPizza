import * as authServices from '../services/authServices';
import * as storageService from '../services/storageService';
import { callApi } from '../services/authApi';

export const fetchRegisterUser = (data) => {
    return async dispatch => {

        try {
            dispatch(fetchUser())
            const res = await callApi('/register', 'POST', data)
            
            const user = await res.json();

            if (res.ok) {
                storageService.setLocalStorage(user)
                dispatch(fetchUserSuccess(user))             
            } else{
                throw new Error(user.message)
            }

           

        } catch (error) {
            dispatch(fetchUserError(error.message))
        }
    }
}

export const fetchLoginUser = (data) => {
 
    return async dispatch => {

        try {

            dispatch(fetchUser())

            const result = await callApi('/login', 'POST', data)
            
            const user = await result.json();

            if(result.ok) {

                storageService.setLocalStorage(user)

                dispatch(fetchUserSuccess(user))

            }else{
                throw new Error(user.message);
            }
                
               

        } catch (error) {
            dispatch(fetchUserError(error.message))

        }

    }
}

export const fetchLogout = () => {
    return async dispatch => {

        try {
            let user = await authServices.logout();
            if (user.message) {
                // dispatch(setMessage(user.message))
            } else {
                storageService.removeLocalStorage('user')
                // dispatch(clearMessage())
                dispatch(fetchUserLogout())
            }
        } catch (error) {
            dispatch(fetchUserError(error))
        }

    }
}

const fetchUser = () => {
    return {
        type: 'FETCH_USER'
    }
}

const fetchUserSuccess = (user) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload: user
    }
}

const fetchUserError = (error) => {

    return {
        type: "FETCH_USER_ERROR",
        error
    }
}

const fetchUserLogout = () => {
    return {
        type: "LOGOUT"
    }
}



