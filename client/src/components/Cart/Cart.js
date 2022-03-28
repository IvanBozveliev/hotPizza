import './Cart.css';
import Product from './Product/Product';
// import {isAuth} from '../../hoc/isAuth'
import { connect } from 'react-redux';
import { getAllCartProducts, increaseQty, decreaseQty, deleteCart, deleteAllCartProducts } from '../../actions/cartActions';


const Cart = (props) => {

    let totalCart = 0;

    props.cart.data.map(prod => {
        totalCart += prod.quantity * prod.price;
    })

   
    const increaseQtyFunction = (product) => {
        props.increaseQty(product)
    }

    const decreaseQtyFunction = (product) => {
        props.decreaseQty(product)
    }

    const deleteProductFunction = (product) => {
        props.deleteCart(product)
    }

    return (
        <>

            <div className="cartBackground">

                <p id='cartTitle'>MY PRODUCTS:</p>

                {props.cart.data.length !== 0 ?
                    props.cart.data.map(product =>
                        <Product key={product._id}
                            product={product}
                            increase={increaseQtyFunction}
                            decrease={decreaseQtyFunction}
                            deleteFunction={deleteProductFunction}
                        />) :
                    <p id='cartText'>Your cart is empty</p>}

                <div id='totalDiv'>
                    <p><b>Total:</b></p>
                    <p id='price'>{totalCart}.00 lv</p>
                    <button id='buy'>BUY</button>
                    <button id='cancel' onClick={() => props.deleteAllCartProducts()}>CANCEL</button>
                </div>


            </div>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartProducts.cart
    }
}

export default connect(mapStateToProps, {
    getAllCartProducts,
    increaseQty,
    decreaseQty,
    deleteCart,
    deleteAllCartProducts
})(Cart)