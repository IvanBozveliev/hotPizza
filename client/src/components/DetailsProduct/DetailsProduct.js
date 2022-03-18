import './DetailsProduct.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as productService from '../../services/productServices';
import * as userService from '../../services/userSerivces';
import * as storageService from '../../services/storageService';

import { useNavigate } from 'react-router-dom';

const DetailsProduct = () => {

    const [product, setProduct] = useState({});
    const [modal, setModal] = useState(false);

    let [image, setImage] = useState(true);
    let [text, setText] = useState('');

    let params = useParams();
    let navigate = useNavigate();
    let userId = storageService.getLocalStorage().id;

    const deleteHandler = (id) => {
        productService.deleteOneProduct(id)
            .then(result => {
                if (result.message) {

                } else {
                    navigate('/')
                }
            })
    }


    function addToCart() {

        setText('Added');
        setImage(false);

        setTimeout(() => {
            setText('')
            setImage(true)
        }, 500)

        userService.getOne(userId)
            .then(user => {
                user.cart.push(product);
                userService.editOne(userId, user)
            })
    

    }

    useEffect(() => {
        productService.getOneProduct(params.id)
            .then(item => setProduct(item))
    }, [params.id]);

    return (
        <>
            {modal ? (

                <div className='modal'>
                    <div className='modalContent'>
                        <p id='txtModal'>Do you want to delete this product?</p>
                        <button id="modalDel" onClick={() => deleteHandler(product._id)}>Delete</button>
                        <button id='modalCancel' onClick={() => setModal(false)}>Cancel</button>
                    </div>

                </div>)
                : ''
            }

            <div id='detailsId'>
                <h2>{product.title}</h2>
                <img src={product.imageUrl} id='detailsImage' alt='productDetails'/>
                <p><b>{product.description}</b></p>
                <p id='price'>Price: {product.price} lv.</p>
                <div id='detailBtns'>
                    {image && <div className='imgCartDetails' onClick={() => addToCart()} />}
                    {text ? <p id='txtDetails'>{text}</p> : ''}
                    <Link to='/' id="detailsBackBtn">Back</Link>
                    <Link to={`/details/edit/${product._id}`} id="detailsEditBtn">Edit</Link>
                    <button id="detailsDeleteBtn" onClick={() => setModal(true)}>Delete</button>
                </div>

            </div>
        </>

    )
}

export default DetailsProduct;