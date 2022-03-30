import {getLocalStorage} from './storageService';
const url = 'http://localhost:5000/api/products/';


export const productApi = (endpoint, methodData, data) => {

    return fetch(url + endpoint, {
        method: methodData,
        headers: {
            'Authorization': 'Bearer ' + getLocalStorage()?.token,
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data)
    })
}