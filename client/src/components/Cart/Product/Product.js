import './Product.css';

const Product = ({
    product
}) => {

    return (
        <div className="divProduct">
            <div className='infoDiv'>
                <img src={product.imageUrl}></img>
                <p id='titlePizza'>{product.title}</p>
                <p id='descriptionProduct'>{product.description}</p>
                <p><b>Price:</b> {product.price}$</p>

                <div className='btnsContainer'>
                    <div className='btns'>+</div><p>12</p><div className='btns'>-</div>
                    <p id='checkboxId'>x</p>
                </div>

                
            </div>

        </div>
    )
}

export default Product;