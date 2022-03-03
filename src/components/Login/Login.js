import './Login.css';

let Login = () => {

    return (
        <div className='loginContent'>
            <h2>Login</h2>
            <form action="#" method='POST' id='loginForm'>
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