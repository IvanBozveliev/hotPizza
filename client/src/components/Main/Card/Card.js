import './Card.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as userService from '../../../services/userSerivces';
import * as productService from '../../../services/productServices';
import * as storageService from '../../../services/storageService';

const Card = ({
    id,
    img,
    title,
    price,
    currentStyle
}) => {

    let [text, setText] = useState('');
    let [image, setImage] = useState(true);
    let userId = storageService.getLocalStorage()?.id;
    
    function addToCart() {

        setText('Added');
        setImage(false);

        setTimeout(() => {
            setText('')
            setImage(true)
        }, 500)

        userService.getOne(userId)
            .then(user => {
                productService.getOneProduct(id) 
                  .then(product => {
    
                    user.cart.push(product);
                    userService.editOne(userId, user)
                  })
               
                
            })
    

    }


    return (
    
        <div className={currentStyle}>
            <img className='imageDiv' src={img} />
            <h5>{title}</h5>
            <div className='cardInfo'>

                <Link to={`/details/${id}`} id='detailsBtn'>Details</Link>
                {image && <div className='imgCart' onClick={() => addToCart()} />}
                {text ? <p id='txt'>{text}</p> : ''}
                <p className='pCard'>price: {price} lv.</p>

            </div>


        </div>
    )
}

export default Card;