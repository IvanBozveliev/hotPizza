export const setLocalStorage = (dataInfo) =>{
    return  localStorage.setItem('user', JSON.stringify(dataInfo))
}

export const getLocalStorage = (dataInfo) =>{
    return localStorage.getItem('user', JSON.parse(dataInfo))
}