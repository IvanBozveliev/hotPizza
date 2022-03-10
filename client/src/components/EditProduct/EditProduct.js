import './EditProduct.css'
import * as productServices from '../../services/productServices.js';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    let [error, setError] = useState('');
    let [state, setState] = useState({});

    useEffect(() => {
        productServices.getOneProduct(id)
            .then(data => {
                setState(data)
            })
    }, [])



    const editHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let title = formData.get('username');
        let description = formData.get('description');
        let imageUrl = formData.get('image');
        let price = formData.get('price');

        productServices.putOneProduct(id, { title, description, imageUrl, price })
            .then(result => {
                if (result.message) {
                    setError(result.message)
                } else {
                    navigate(`/details/${id}`)
                }

            })

    }

    return (
        <>
            {error && <div id='errorDiv'><p>{error}</p></div>}
            <div className='editContent'>
                <h2>Edit Pizza</h2>
                <form method='POST' id='editForm' onSubmit={editHandler}>
                    <label htmlFor='inputText'>Title:</label>
                    <input type='text' name='username' id='inputText' defaultValue={state.title} />
                    <label htmlFor='inputDescription' >Description:</label>
                    <input type='text' name='description' id='inputDescription' defaultValue={state.description} />
                    <label htmlFor='inputImage' >Image Url:</label>
                    <input type='text' name='image' id='inputImage' defaultValue={state.imageUrl} />
                    <label htmlFor='inputImage' >Price:</label>
                    <input type='number' name='price' id='inputImage' defaultValue={state.price} />
                    <input type='submit' defaultValue='Edit' />
                </form>
            </div>
        </>

    )
}

export default EditProduct;