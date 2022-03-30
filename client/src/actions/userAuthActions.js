import * as authServices from '../services/authServices';
import * as storageService from '../services/storageService';
import { callApi } from '../services/authApi';
import { api } from '../services/api';

export const fetchRegisterUser = (data) => {
    return async dispatch => {

        try {
            dispatch(fetchUser())
            const res = await callApi('/register', 'POST', data)

            const user = await res.json();

            if (res.ok) {
                storageService.setLocalStorage(user)
                dispatch(fetchUserSuccess(user))
            } else {
                throw new Error(user.message)
            }



        } catch (error) {
            dispatch(userLogoutError(error.message))
        }
    }
}


export const fetchLoginUser = (data) => {

    return async (dispatch) => {

        try {

            dispatch(fetchUser())

            const json = await api.post('/auth/login', data);

            storageService.setLocalStorage(json)

            dispatch(fetchUserSuccess(json))



        } catch (error) {

            dispatch(userLogoutError(error.message))

        }

    }

}


export const fetchLogout = () => {
    return async dispatch => {

        try {
            dispatch(userLogout());
            await api.get('/auth/logout');
            storageService.removeLocalStorage('user')
            dispatch(userLogoutSuccess())

        } catch (error) {
            dispatch(userLogoutError(error))
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

const userLogoutError = (error) => {

    return {
        type: "LOGOUT_ERROR",
        error
    }
}

const userLogoutSuccess = () => {
    return {
        type: "LOGOUT_SUCCESS"
    }
}

const userLogout = () => {
    return {
        type: "LOGOUT"
    }
}

