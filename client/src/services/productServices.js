let link = 'http://localhost:5000/api/products';

export function getAllProducts(){
   return fetch(link)
    .then(res => res.json())
}

export function postProduct(data){
    return fetch(link,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
     .then(res => res.json())
}