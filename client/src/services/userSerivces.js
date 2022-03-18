const link = 'http://localhost:5000/api/users';

export const getAllUsers = () => {
   return fetch(link)
           .then(res => res.json())
}


export const deleteOneUser = (id) => {
   return fetch(link + `/${id}`,{
           method: 'DELETE'
   })
           .then(res => res.json())
}

export const getOne = (id) => {
        return fetch(link + `/${id}`)
                .then(res => res.json())
}

export const editOne = (id, data) => {
        return fetch(link + `/${id}`,{
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
        })
                .then(res => res.json())
}

