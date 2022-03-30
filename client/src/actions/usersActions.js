import * as userServices from '../services/userSerivces';
import { usersApi } from '../services/usersApi';
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

export const fetchDeleteUser = (id) => {
  
   return (dispatch) => {
      usersApi(id, 'DELETE', null)
         .then(res => res.json())
         .then(() => dispatch(deleteUser(id)))
   }
}

export const fetchGetAllUsers = () => {
    return async dispatch => {
        try {
           let users = await userServices.getAllUsers()
           dispatch({type: 'FETCH_USERS_SUCCESS', payload: users})
        }catch(error){
           dispatch({type: 'FETCH_USERS_ERRORS', error})
        }
    }
}

function deleteUser(userId){

    return {
        type: 'DELETE_USER',
        id: userId
    }
}



// const fetchUsersSuccess = users => {
//     return {
//         type: 'FETCH_USERS_SUCCESS',
//         payload: users
//     }
// }