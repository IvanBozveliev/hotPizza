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