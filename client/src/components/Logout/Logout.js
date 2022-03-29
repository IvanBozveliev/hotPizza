// import {useEffect, useState} from 'react';
// import * as authServices from '../../services/authServices';
import { useNavigate } from 'react-router-dom';
// import {removeLocalStorage} from '../../services/storageService';
import {connect} from 'react-redux';
import {fetchLogout} from '../../actions/userAuthActions';
import { useEffect } from 'react';

const Logout = (props) => {
    const navigate = useNavigate();
    // let [error, setError] = useState('');
 
    props.fetchLogout();

      useEffect(() => {
        navigate('/login')
      },[props])
          
     

     return null
}

export default connect(null, {fetchLogout})(Logout);