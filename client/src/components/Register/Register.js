import './Register.css';
import * as authServices from '../../services/authServices.js';

const Register = () => {
   
    const registerHandler = (e) =>{
      e.preventDefault();

      let formData = new FormData(e.currentTarget);
      let username = formData.get('username');
      let password = formData.get('password');
      let repeatPassword = formData.get('repeat-password');

      authServices.register({username, password, repeatPassword})
        .then(data => {
            console.log(data)
        })
    }

    return(
        <div className='registerContent'>
            <h2>Register</h2>
            <form method='POST' id='loginForm' onSubmit={registerHandler}>
                <label htmlFor='inputText'>Username:</label>
                <input type='text' name='username' id='inputText'/>
                <label htmlFor='inputPass'>Password:</label>
                <input type='password' name='password' id='inputPass' />
                <label htmlFor='inputPass'>Repeat Password:</label>
                <input type='password' name='repeat-password' id='inputPass' />
                <input type='submit' value='Register' />
            </form>
        </div>
    )
}

export default Register;