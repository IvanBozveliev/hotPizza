import './DetailsProduct.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as productService from '../../services/productServices';
import { useNavigate } from 'react-router-dom'

const DetailsProduct = () => {
    const [product, setProduct] = useState({});
    let [image, setImage] = useState(true);
    let [text, setText] = useState('');

    let params = useParams();
    let navigate = useNavigate();

    const deleteHandler = (id) => {
        productService.deleteOneProduct(id)
            .then(result => {
                if (result.message) {

                } else {
                   navigate('/')
                }
            })
    }

    function clicked() {

        setText('Added');
        setImage(false);

        setTimeout(() => {
            setText('')
            setImage(true)
        }, 500)

        // user.cart.push(product)

    }

    useEffect(() => {
        productService.getOneProduct(params.id)
            .then(item => setProduct(item))
    }, []);

    return (
        <div id='detailsId'>
            <h2>{product.title}</h2>
            <img src={product.imageUrl} id='detailsImage' />
            <p><b>{product.description}</b></p>
            <p id='price'>Price: {product.price} lv.</p>
            <div id='detailBtns'>
                {image && <div className='imgCartDetails' onClick={() => clicked()} />}
                {text ? <p id='txtDetails'>{text}</p> : ''}
                <Link to='/' id="detailsBackBtn">Back</Link>
                <Link to={`/details/edit/${product._id}`} id="detailsEditBtn">Edit</Link>
                <button id="detailsDeleteBtn" onClick={() => deleteHandler(product._id)}>Delete</button>
            </div>

        </div>
    )
}

export default DetailsProduct;