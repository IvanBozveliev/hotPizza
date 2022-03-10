import {getLocalStorage} from './storageService';

let link = 'http://localhost:5000/api/products';


export function getAllProducts(){
   return fetch(link)
    .then(res => res.json())
}

export function postProduct(data){
    return fetch(link,{
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

export const getOneProduct = (id) => {
 
   return fetch(link + `/${id}`)
            .then(res => res.json())
}

export const putOneProduct = (id, product) => {

    return fetch(link + `/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + getLocalStorage()?.token,
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
}