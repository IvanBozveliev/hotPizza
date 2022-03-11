import './Nav.css';
import {getLocalStorage} from '../../../services/storageService';
import { Link } from 'react-router-dom';

const Nav = () => {
  const user = getLocalStorage();

console.log(user)
  return (
    <div className='navDiv'>

      <div className='Logo'>
        <img src='../../img/logo1.png' />
        <p>Pizza Borano</p>
        {/* <p>Welcome, Ivan</p> */}
      </div>

      <div className='allLinks'>
        
        <Link to="/">Home</Link>
        <Link to="/create-pizza">Create Pizza</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link> 
        <Link to="/about">About</Link>
        <Link to="/feedback" id='feedback'>Feedback</Link>
        <Link to="/users" >Users</Link>
        <Link to="/logout" id='logout'>Logout</Link>
        <Link to="/cart"><div id='cart' /></Link>
        <div id='numCart'>4</div>

      </div>


    </div>
  )
}

export default Nav;