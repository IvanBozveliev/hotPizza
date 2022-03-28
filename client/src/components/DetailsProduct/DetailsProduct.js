import './DetailsProduct.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as productService from '../../services/productServices';
import * as userService from '../../services/userSerivces';
import * as storageService from '../../services/storageService';
import { connect } from 'react-redux';
import { AddCart } from '../../actions/cartActions';

import { useNavigate } from 'react-router-dom';

const DetailsProduct = (props) => {

    const [product, setProduct] = useState({});
    const [modal, setModal] = useState(false);

    let [image, setImage] = useState(true);
    let [text, setText] = useState('');

    let params = useParams();
    let navigate = useNavigate();
    let user = storageService.getLocalStorage();

    const deleteHandler = (id) => {
        productService.deleteOneProduct(id)
            .then(result => {
                if (result.message) {

                } else {
                    navigate('/')
                }
            })
    }


    function addToCart(product) {

        setText('Added');
        setImage(false);

        setTimeout(() => {
            setText('')
            setImage(true)
        }, 500)

        props.AddCart(product)


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
                <img src={product.imageUrl} id='detailsImage' alt='productDetails' />
                <p><b>{product.description}</b></p>
                <p id='price'>Price: {product.price} lv.</p>
                <div id='detailBtns'>

                    <Link to='/' id="detailsBackBtn">Back</Link>
                    {user &&
                        <>
                            {image && <div className='imgCartDetails' onClick={() => addToCart(product)} />}
                            {text ? <p id='txtDetails'>{text}</p> : ''}
                            
                            {user.role !== "user" &&
                                <>
                                    <Link to={`/details/edit/${product._id}`} id="detailsEditBtn">Edit</Link>
                                    <button id="detailsDeleteBtn" onClick={() => setModal(true)}>Delete</button>
                                </>
                            }

                        </>
                    }

                </div>

            </div>
        </>

    )
}

// const mapStateToProps = (state) => {
//     cart: state.cartProducts.cart
// }

export default connect(null, { AddCart })(DetailsProduct);