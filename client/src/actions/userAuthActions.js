import * as authServices from '../services/authServices';
import * as storageService from '../services/storageService';

export const fetchRegisterUser = (data) => {
    return async dispatch => {

        try{
            let user = await authServices.register(data);
            if(user.message){
                dispatch(fetchUserError(user.message))
            }else{
                storageService.setLocalStorage(user)
                dispatch(fetchUserSuccess(user))
            }
            
        }catch(error){
            dispatch(fetchUserError(error))
        }
    }
}

export const fetchLoginUser = () => {
    return async dispatch => {

        try{
            let user = await authServices.login();
            dispatch(fetchUserSuccess(user))
        }catch(error){
            dispatch(fetchUserError(error))
        }
    }
}

export const fetchLogout = () => {
   return  dispatch => {
       authServices.logout()
          .then(() => dispatch(fetchUserLogout() ))
          .catch(error => dispatch(fetchUserError(error)))
       
   }
}

const fetchUserSuccess = (user) => {
    return{
        type: 'FETCH_USER_SUCCESS',
        payload: user
    }
}

const fetchUserError = (error) => {
    console.log(error)
    return {
        type: "FETCH_USER_ERROR",
        payload: error
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
