import './Login.css';
import * as authServices from '../../services/authServices.js';
import { setLocalStorage } from '../../services/storageService.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

let Login = () => {
    let navigate = useNavigate();
    let [error, setError] = useState('')
    const loginHandler = (e) => {
        e.preventDefault();


        let formData = new FormData(e.currentTarget);
        let username = formData.get('username');
        let password = formData.get('password');

        authServices.login({ username, password })
            .then(data => {

                if (data.message) {
                    setError(data.message);
                    setTimeout(()=>{
                        setError('')
                    },2000)
                } else {
                    setLocalStorage(data);
                    navigate('/');
                }

            })
            .catch(error => console.log(`ERROR: ${error}`))

    }

    return (
        <>      
         {error && <div id='errorDiv'><p>{error}</p></div>}
            <div className='loginContent'>

                <h2>Login</h2>
                <form method='POST' id='loginForm' onSubmit={loginHandler}>
                    <label htmlFor='inputText'>Username:</label>
                    <input type='text' name='username' id='inputText' />
                    <label htmlFor='inputPass'>Password:</label>
                    <input type='password' name='password' id='inputPass' />
                    <input type='submit' value='Login' />
                </form>
            </div>
        </>


    )
}

export default Login