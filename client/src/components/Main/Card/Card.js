import './Card.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as userService from '../../../services/userSerivces';
import * as productService from '../../../services/productServices';
import * as storageService from '../../../services/storageService';
import { connect } from 'react-redux';
import { AddCart } from '../../../actions/cartActions.js'

const Card = ({
    data,
    currentStyle,
    addToCart
}) => {
 
    let [text, setText] = useState('');
    let [image, setImage] = useState(true);
    // let userId = storageService.getLocalStorage()?.id;
  
    function addToCartFunction() {
        
        if(addToCart) addToCart(data)
        
        setText('Added');
        setImage(false);

        setTimeout(() => {
            setText('')
            setImage(true)
        }, 500)
        
        // userService.getOne(userId)
        //     .then(user => {
        //         productService.getOneProduct(data._id) 
        //           .then(product => {
    
        //             user.cart.push(product);
        //             userService.editOne(userId, user)
        //           })
               
                
        //     })
    

    }


    return (
        
        <div className={currentStyle}>
            <img className='imageDiv' src={data.imageUrl} />
            <h5>{data.title}</h5>
            <div className='cardInfo'>

                <Link to={`/details/${data._id}`} id='detailsBtn'>Details</Link>
                {image && <div className='imgCart' onClick={addToCartFunction} />}
                {text ? <p id='txt'>{text}</p> : ''}
                <p className='pCard'>price: {data.price} lv.</p>

            </div>


        </div>
    )
}

// const mapStateToProps = (state) => {
//     return{
//         cart: state.cartProducts.cart
//     }
// }

export default Card;