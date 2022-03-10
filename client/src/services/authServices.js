import {getLocalStorage} from './storageService';

const url = 'http://localhost:5000/api/auth';

export const register = (userData) => {

    return fetch(url + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())

}

export const login = (userData) => {

    return fetch(url + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())

}

export const logout = () => {
    return fetch(url +'/logout',{
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getLocalStorage()?.token,
            'Content-Type': 'application/json',

        },
    })
      .then(res => res.json())
}