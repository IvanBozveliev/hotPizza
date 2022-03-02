import './Nav.css';

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navDiv'>
      <div className='Logo'>
        <img src='../../img/logo1.png' />
        <p>Pizza Borano</p>
      </div>

      <Link to="#">About</Link>
      <Link to="#">Order</Link>
      <Link to="/login">Login</Link>
      <Link to="contacts">Contacts</Link>
      <Link to="/">Home</Link>

    </div>
  )
}

export default Nav