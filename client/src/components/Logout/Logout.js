import {useEffect} from 'react';
import * as authServices from '../../services/authServices';
import { useNavigate } from 'react-router-dom';
import {removeLocalStorage} from '../../services/storageService';

const Logout = () => {
    const navigate = useNavigate();

     useEffect(() => {
         authServices.logout()
            .then(result => {
                if(result.message){
                  console.log(result)
                }else{
                    removeLocalStorage('user')
                    navigate('/login');
                }
            })
     },[])

     return null
}

export default Logout;