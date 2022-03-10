import './Register.css';
import * as authServices from '../../services/authServices.js';
import { setLocalStorage } from '../../services/storageService.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
    let navigate = useNavigate();
    let [error, setError] = useState('');

    const registerHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let username = formData.get('username');
        let password = formData.get('password');
        let repeatPassword = formData.get('repeat-password');

        authServices.register({ username, password, repeatPassword })
            .then(data => {
                if (data.message) {
                    setError(data.message);
                    setTimeout(() => {
                        setError('')
                    }, 2000)
                } else {
                    setLocalStorage(data);
                    navigate('/');
                }
            })
    }

    return (
        <>
            {error && <div id='errorDiv'><p>{error}</p></div>}
            <div className='registerContent'>
                <h2>Register</h2>
                <form method='POST' id='loginForm' onSubmit={registerHandler}>
                    <label htmlFor='inputText'>Username:</label>
                    <input type='text' name='username' id='inputText' />
                    <label htmlFor='inputPass'>Password:</label>
                    <input type='password' name='password' id='inputPass' />
                    <label htmlFor='inputPass'>Repeat Password:</label>
                    <input type='password' name='repeat-password' id='inputPass' />
                    <input type='submit' value='Register' />
                </form>
            </div>
        </>

    )
}

export default Register;