import './MyOrders.css';
import { connect } from 'react-redux';

const MyOrders = (props) => {
    return (
        <div className='myOrdersContent'>
            <h2>My Orders List</h2>
            <p id='TextOrder'>Your order list is empty</p>
            <button id='clearBtn' onClick={() => props.deleteAllCartProducts()}>CLEAR</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        orders: state.cartProducts.orders
    }

}

export default connect(mapStateToProps)(MyOrders)