import './MyOrders.css';
import { connect } from 'react-redux';
import { getProductsByOrderId } from '../../redux/actions/orderedProductsAction';

const MyOrders = (props) => {

    const { isLoading, data, error } = props.orders;

    if (isLoading) {
        return <div className='loaderContent'>
            {/* <div className="loaderOrders" /> */}
            <p><b>Loading...</b></p>
            <img src="https://codemyui.com/wp-content/uploads/2019/01/Rotating-Pizza-Slice-Preloader.gif" width={400} />
        </div>
    }
    if (error) {

        return <div className='errorContent'>
            <h2>Ooops, something went wrong!</h2>
        </div>

    }

    return (
        <>
            <div className='myOrdersContent'>
                <h2>My Orders List</h2>
                {data.length === 0 ?
                    <p id='TextOrder'>Your order list is empty</p> :
                    <div className='ordersList'>
                        <ul>
                            {data.map((item, index) =>
                                <li className='listOrders' key={index} onClick={() => props.getProductsByOrderId(item.orderId)}>
                                    <p>OrderId: {item.orderId}</p>
                                    <p>Created Date: {item.createdDate}</p>
                                    <p>Total: {item.orderTotal} lv</p>
                                    <p className='status'>Status: {item.status}</p>
                                </li>
                            )}

                        </ul>
                    </div>
                }
            </div >
            <div className='myOrdersContent'>
                <h2>My Products List</h2>
                <ul>
                    {
                        props.orderedProducts.map(function (item, index) {

                            return <li key={index} className='myProductsList'>
                                <h2>{item.title}</h2>
                                <img src={item.imageUrl} width={200} />
                                <p>Price: {item.price}lv</p>
                                <p>Description: {item.description}</p>
                            </li>;
                        })
                    }
                </ul>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders,
        orderedProducts: state.orderedProducts.data
    }

}

export default connect(mapStateToProps, { getProductsByOrderId })(MyOrders)