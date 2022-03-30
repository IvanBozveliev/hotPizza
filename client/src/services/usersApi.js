import {getLocalStorage} from './storageService';
const url = 'http://localhost:5000/api/users/';


export const usersApi = (endpoint, methodData, data) => {

    return fetch(url + endpoint, {
        method: methodData,
        headers: {
            'Authorization': 'Bearer ' + getLocalStorage()?.token,
            'Content-Type': 'application/json',
        },
         body: data && JSON.stringify(data)
    })
}