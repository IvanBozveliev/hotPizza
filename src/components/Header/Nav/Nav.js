import './Nav.css';

const Nav = () => {
  return (
    <div className='navDiv'>
      <div className='Logo'>
        <img src='../../img/logo1.png' />
        <p>Pizza Borano</p>
      </div>

      <a href="#">About</a>
      <a href="#">Order</a>
      <a href="#">Contacts</a>
      <a href="#">Home</a>

    </div>
  )
}

export default Nav