import './Register.css';

const Register = () => {
   
    return(
        <div className='registerContent'>
            <h2>Register</h2>
            <form method='POST' id='loginForm'>
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