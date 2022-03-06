export function getAll(){
   return fetch('http://localhost:5000/api/products')
    .then(res => res.json())
}