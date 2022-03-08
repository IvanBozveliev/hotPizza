import './DetailsProduct.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as productService from '../../services/productServices';

const DetailsProduct = () => {
    const [product, setProduct] = useState({});
    let [image, setImage] = useState(true);
    let [text, setText] = useState('');

    let params = useParams();

    function clicked() {
        setText('Added');
        setImage(false)
        setTimeout(() => {
            setText('')
            setImage(true)
        }, 500)
    }

    useEffect(() => {
        productService.getOneProduct(params.id)
            .then(item => setProduct(item))
    }, []);

    return (
        <div id='detailsId'>
            <h2>{product.title}</h2>
            <img src={product.imageUrl} id='detailsImage' />
            <p>{product.description}</p>
            <p id='price'>Price: {product.price} lv.</p>
            <div id='detailBtns'>
            {image &&<div className='imgCartDetails' onClick={() => clicked()}/>}
                {text ? <p id='txtDetails'>{text}</p> : ''}
                <Link to='/' id="detailsBackBtn">Back</Link>
            </div>

        </div>
    )
}

export default DetailsProduct;