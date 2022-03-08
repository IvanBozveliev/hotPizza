import './Cart.css';
import Product from './Product/Product';

const Cart = () => {

    return (
        <div className="cartBackground">
            <p id='cartTitle'>MY PRODUCTS:</p>
            <Product />
            <Product />

            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, obcaecati totam asperiores debitis consequuntur illo perferendis labore unde exercitationem? Placeat ad ipsam commodi vitae nihil quos atque corporis est impedit.</p> */}
            
            <div id='totalDiv'>
                <p><b>Total:</b></p>
                <p id='price'>228$</p>
                <button id='buy'>BUY</button>   
                <button id='cancel'>CANCEL</button>    
            </div>
    

        </div>
    )
}

export default Cart