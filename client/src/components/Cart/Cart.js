import './Cart.css';

const Cart = () => {

    return (
        <div className="cartBackground">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, obcaecati totam asperiores debitis consequuntur illo perferendis labore unde exercitationem? Placeat ad ipsam commodi vitae nihil quos atque corporis est impedit.</p>
            
            <div id='totalDiv'>
                <p><b>Total:</b></p>
                <p id='price'>228$</p>
                <button id='buy'>BUY</button>    
            </div>
    

        </div>
    )
}

export default Cart