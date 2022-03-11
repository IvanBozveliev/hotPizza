import {getLocalStorage} from './storageService';
let link = 'http://localhost:5000/api/feedback';

export function getAllComments() {
    return fetch(link)
        .then(res => res.json())
}

export function postComment(data) {
    return fetch(link, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + getLocalStorage()?.token,
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(error => console.log(`error`))
}

export const getOneComment = (id) => {

    return fetch(link + `/${id}`)
        .then(res => res.json())
}

export const putOneComment = (id, comment) => {

    return fetch(link + `/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + getLocalStorage()?.token,
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(comment)
    })
        .then(res => res.json())
}

export const deleteOneComment = (id) => {
    return fetch(link + `/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + getLocalStorage()?.token,
            'Content-Type': 'application/json',
        },
    });
}