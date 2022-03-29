import './Register.css';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import {fetchRegisterUser} from '../../actions/userAuthActions';
 
const Register = (props) => {
    let navigate = useNavigate();
    // let [error, setError] = useState('');

    const registerHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let username = formData.get('username');
        let password = formData.get('password');
        let repeatPassword = formData.get('repeat-password');
       
        props.fetchRegisterUser({username, password, repeatPassword})
           .then(() => {
              navigate('/')
           })

    }

    return (
        <>
            {/* {error && <div id='errorDiv'><p>{error}</p></div>} */}
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


export default connect(null, {fetchRegisterUser})(Register);