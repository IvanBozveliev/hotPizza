const url = 'http://localhost:5000/api/auth';

export const callApi = (endpoint, methodData, data) => {

    return fetch(url + endpoint, {
        method: methodData,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}