export const setLocalStorage = (dataInfo) =>{
    return  localStorage.setItem('user', JSON.stringify(dataInfo))
}

export const getLocalStorage = () =>{
    
    let result = localStorage.getItem('user')
    return JSON.parse(result);
    
}