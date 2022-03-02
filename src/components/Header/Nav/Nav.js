import './Nav.css';

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navDiv'>
      <div className='Logo'>
        <img src='../../img/logo1.png' />
        <p>Pizza Borano</p>
      </div>

      <a href="#">About</a>
      <a href="#">Order</a>
      <Link to="contacts">Contacts</Link>
      <Link to="/">Home</Link>

    </div>
  )
}

export default Nav