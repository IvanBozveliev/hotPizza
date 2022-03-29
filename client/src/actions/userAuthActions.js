import * as authServices from '../services/authServices';
import * as storageService from '../services/storageService';
import { clearMessage,setMessage } from './messageAction';

export const fetchRegisterUser = (data) => {
    return async dispatch => {

        try{
            let user = await authServices.register(data);
            if(user.message){
                dispatch({
                    type: 'FETCH_USER_ERROR'
                })
                dispatch(fetchUserError())
                dispatch(setMessage(user.message))
            }else{
                storageService.setLocalStorage(user)
                dispatch(fetchUserSuccess(user))
                dispatch(clearMessage())
            }
            
        }catch(error){
            dispatch(fetchUserError(error))
            dispatch(setMessage(error))
        }
    }
}

export const fetchLoginUser = (data) => {
    return async dispatch => {

        try{
            let user = await authServices.login(data);
            if(user.message){
                dispatch(fetchUserError())
                dispatch(setMessage(user.message))
            }else{
                storageService.setLocalStorage(user)
                dispatch(fetchUserSuccess(user))
                dispatch(clearMessage())
            }
            
        }catch(error){
            dispatch(fetchUserError(error))
            dispatch(setMessage(error))
        }
    }
}

export const fetchLogout = () => {
   return  async dispatch => {
       
       try{
         let user = await authServices.logout();
         if(user.message){
            dispatch(setMessage(user.message))
         }else{
            storageService.removeLocalStorage('user')
            dispatch(clearMessage())
            dispatch(fetchUserLogout())
         }
       }catch(error){
        dispatch(fetchUserError(error))
       }
      
   }
}

const fetchUserSuccess = (user) => {
    return{
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



// export function getUser(userId){

//     return{
//         type: "GET_USER",
//         id: userId
//     }
// }

// export function getAllUsers(users){

//     return{
//         type: "GET_ALL_USERS",
//         payload: users
//     }
// }

// export function editUser(userId, userData){
//     return {
//         type: "EDIT_USER",
//         id: userId,
//         userData
//     }
// }

// export function deleteUser(userId){
//     return {
//         type: 'DELETE_USER',
//         id: userId
//     }
// }
