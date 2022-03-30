import './Nav.css';
import { getLocalStorage } from '../../../services/storageService';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { GetAllProducts } from '../../../actions/cartActions';

const Nav = (props) => {

  return (

    <div className='navDiv'>

      <div className='Logo'>
        <img src='../../img/logo1.png' />
        <p>Pizza Borano</p>

      </div>

      <div className='allLinks'>
        {props.isLogged ?
          <>
            <p className='userName'>Welcome, {props.user}</p>
            <Link to="/">Home</Link>
            <Link to="/create-pizza">Create Pizza</Link>
            <Link to="/about">About</Link>
            <Link to="/feedback" id='feedback'>Feedback</Link>
            {props.user && props.role == 'admin' && <Link to="/users" >Users</Link>}
            {/* <Link to="/users" >Users</Link> */}
            <Link to="/logout" id='logout'>Logout</Link>
            <Link to="/cart"><div id='cart' /></Link>
            <div id='numCart'>{props.cart.counter}</div>
          </>
          :
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>

          </>
        }


      </div>


    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartProducts.cart,
    isLogged: state.auth.isLoggedIn,
    user: state.auth.user?.username,
    role: state.auth.user?.role
  }
}
export default connect(mapStateToProps, null)(Nav);