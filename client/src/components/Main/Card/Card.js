import './Card.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Card = ({
    id,
    img,
    title,
    price,
    currentStyle
}) => {
    let [text, setText] = useState('');
    let [image, setImage] = useState(true);

    function clicked() {
        setText('Added');
        setImage(false)
        setTimeout(() => {
            setText('')
            setImage(true)
        }, 500)
    }
    return (
        <div className={currentStyle}>
            <img className='imageDiv' src={img} />
            <h5>{title}</h5>
            <div className='cardInfo'>

                <Link to={`/details/${id}`} id='detailsBtn'>Details</Link>
                {image && <div className='imgCart' onClick={() => clicked()} />}
                {text ? <p id='txt'>{text}</p> : ''}
                <p className='pCard'>price: {price} lv.</p>

            </div>


        </div>
    )
}

export default Card;