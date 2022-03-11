const link = 'http://localhost:5000/api/users';

export const getAllUsers = () => {
   return fetch(link)
           .then(res => res.json())
}


export const deleteOneUser = (id) => {
   return fetch(link + `/${id}`)
           .then(res => res.json())
}



