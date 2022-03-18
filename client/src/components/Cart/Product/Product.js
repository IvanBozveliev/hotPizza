import './Product.css';

const Product = ({
    product
}) => {

    return (
        <div className="divProduct">
            <div className='infoDiv'>
                <img src={product.imageUrl}></img>
                <p id='titlePizza'>{product.title}</p>
                <p>{product.description}</p>
                <p><b>Price:</b> {product.price}$</p>
                <p>Piece: 1</p>
                <input type='checkbox' name='product' id='checkboxId' />
            </div>

        </div>
    )
}

export default Product;