import './Cart.css';
import Product from './Product/Product';
import * as userService from '../../services/userSerivces';
import * as storageService from '../../services/storageService';
import { connect } from 'react-redux';
import {getAllCartProducts} from '../../actions/cartActions';

import { useEffect, useState } from 'react';

const Cart = (props) => {
    console.log(props.cart)
    let [cartProducts, setCartProducts] = useState([]);
    let [modal, setModal] = useState(false);

    let userId = storageService.getLocalStorage().id;

    useEffect(() => {
        userService.getOne(userId)
            .then(user => {
                setCartProducts(user.cart)
            })
    }, [userId])

    const cancelHandler = () => {

        userService.getOne(userId)
            .then(user => {
        
                user.cart = [];

                userService.editOne(userId, user)
                    .then(() => {
                        setCartProducts([])
                    })

            })
        setModal(false)
    }

    return (
        <>
            {modal ? (

                <div className='modal'>
                    <div className='modalContent'>
                        <p id='txtModal'>Do you want to delete cart products?</p>
                        <button id="modalDel" onClick={() => cancelHandler()}>Delete</button>
                        <button id='modalCancel' onClick={() => setModal(false)}>Cancel</button>
                    </div>

                </div>)
                : ''
            }

            <div className="cartBackground">

                <p id='cartTitle'>MY PRODUCTS:</p>
                {props.cart.data.length !== 0 ? props.cart.data.map(product => <Product key={product._id} product={product} />) : <p id='cartText'>Your cart is empty</p>}
                {/* {cartProducts.length !== 0 ? cartProducts.map(product => <Product key={product._id} product={product} />) : <p id='cartText'>Your cart is empty</p>} */}

                <div id='totalDiv'>
                    <p><b>Total:</b></p>
                    <p id='price'>228$</p>
                    <button id='buy'>BUY</button>
                    <button id='cancel' onClick={()=> setModal(true)}>CANCEL</button>
                </div>


            </div>
        </>

    )
}

const mapStateToProps = (state) => {
    return{
        cart: state.cartProducts.cart
    }
}

export default connect(mapStateToProps, {getAllCartProducts})(Cart)