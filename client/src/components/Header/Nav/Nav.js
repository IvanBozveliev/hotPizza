import './Nav.css';

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navDiv'>

      <div className='Logo'>
        <img src='../../img/logo1.png' />
        <p>Pizza Borano</p>
      </div>

      <div className='allLinks'>
        
        <Link to="/">Home</Link>
        <Link to="contacts">Contacts</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link> 
        <Link to="/about">About</Link>
        <Link to="/create-pizza">Create Pizza</Link>
        <Link to="/cart"><div id='cart' /></Link>
        <div id='numCart'>4</div>
      </div>


    </div>
  )
}

export default Nav