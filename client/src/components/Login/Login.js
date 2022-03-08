import './Login.css';
import * as authServices from '../../services/authServices.js';

let Login = () => {
   
    const loginHandler = (e) => {
       e.preventDefault();

       let formData = new FormData(e.currentTarget);
       let username = formData.get('username');
       let password = formData.get('password');
       
       authServices.login({username, password})
          .then(data => {
              console.log(data)
          })
          .catch(error => console.log(`ERROR: ${error}`))

    }

    return (
        <div className='loginContent'>
            <h2>Login</h2>
            <form method='POST' id='loginForm' onSubmit={loginHandler}>
                <label htmlFor='inputText'>Username:</label>
                <input type='text' name='username' id='inputText'/>
                <label htmlFor='inputPass'>Password:</label>
                <input type='password' name='password' id='inputPass' />
                <input type='submit' value='Login' />
            </form>
        </div>

    )
}

export default Login