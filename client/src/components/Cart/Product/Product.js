import './Product.css';

const Product = () => {

    return (
        <div className="divProduct">
            <div className='infoDiv'>
                <img src='../../../../img/pizza7.png'></img>
                <p id='titlePizza'>Pizza torro</p>
                <p>Pizza Pach with cheese thyme and sauce of tomatoes</p>
                <p><b>Price:</b> 10$</p>
                <input type='checkbox' name='product' id='checkboxId' />
            </div>

        </div>
    )
}

export default Product;