import './Login.css';
// import * as authServices from '../../services/authServices.js';
// import { setLocalStorage } from '../../services/storageService.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchLoginUser } from '../../actions/userAuthActions'
import { useEffect } from 'react';

let Login = (props) => {

    let navigate = useNavigate();
    // let [error, setError] = useState('');

    const loginHandler = (e) => {
        e.preventDefault();


        let formData = new FormData(e.currentTarget);
        let username = formData.get('username');
        let password = formData.get('password');

        props.fetchLoginUser({ username, password })


    }
    useEffect(() => {
        if (props.isLogged) {
            navigate('/')
        }
        // }else{
        //    setError(props.error)
        // }
    }, [props])


    return (
        <>
            {props.error && <div id='errorDiv'><p>{props.error}</p></div>}
            <div className='loginContent'>

                <h2>Login</h2>
                <form method='POST' id='loginForm' onSubmit={loginHandler}>
                    <label htmlFor='inputText'>Username:</label>
                    <input type='text' name='username' id='inputText' />
                    <label htmlFor='inputPass'>Password:</label>
                    <input type='password' name='password' id='inputPass' />
                    {props.isLoading ? <label>Loading...</label> : <input type='submit' value='Login' />}
                </form>
            </div>
        </>


    )
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLoggedIn,
        error: state.auth.error,
        isLoading: state.auth.isLoading
    }
}
export default connect(mapStateToProps, { fetchLoginUser })(Login)