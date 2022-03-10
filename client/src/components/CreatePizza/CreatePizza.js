import './CreatePizza.css';
import * as productServices from '../../services/productServices.js';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePizza = () => {
    const navigate = useNavigate();
    let [error, setError] = useState('');
    const createHandler = (e) => {
        e.preventDefault();


        let formData = new FormData(e.currentTarget);
        let title = formData.get('username');
        let description = formData.get('description');
        let imageUrl = formData.get('image');
        let price = formData.get('price');

        productServices.postProduct({ title, description, imageUrl, price })
            .then(data => {
                if (data.message) {
                    setError(data.message);
                    setTimeout(() => {
                        setError('')
                    }, 2000)
                } else {
                    navigate('/')
                }

            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {error && <div id='errorDiv'><p>{error}</p></div>}
            <div className='createPizza'>
                <h2>Create Pizza</h2>
                <form method='POST' id='loginForm' onSubmit={createHandler}>
                    <label htmlFor='inputText'>Title:</label>
                    <input type='text' name='username' id='inputText' />
                    <label htmlFor='inputDescription'>Description:</label>
                    <input type='text' name='description' id='inputDescription' />
                    <label htmlFor='inputImage'>Image Url:</label>
                    <input type='text' name='image' id='inputImage' />
                    <label htmlFor='inputImage'>Price:</label>
                    <input type='number' name='price' id='inputImage' />
                    <div>
                        <input type='submit' value='Create' />
                    </div>

                </form>
            </div>
        </>

    )
}

export default CreatePizza;