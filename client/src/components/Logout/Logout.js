import {useEffect, useState} from 'react';
import * as authServices from '../../services/authServices';
import { useNavigate } from 'react-router-dom';
import {removeLocalStorage} from '../../services/storageService';

const Logout = () => {
    const navigate = useNavigate();
    let [error, setError] = useState('');

     useEffect(() => {
         authServices.logout()
            .then(result => {
                if(result.message){
                    setError(result.message)
                }else{
                    removeLocalStorage('user')
                    navigate('/login');
                }
            })
     },[])

     return (
         <>
         {error ? <div id='errorDiv'><p>{error}</p></div> : ''}
         </>
        
     )
}

export default Logout;