import './Card.css';

const Card = ({
    img,
    title,
    price,
    currentStyle
}) => {
    return (
        <div className={currentStyle}>
            <img className='imageDiv' src={img} />
            <h5>{title}</h5>
            <div className='cardInfo'>

                <button id='detailsId'>Details</button>
                <div className='imgCart' />
                <p className='pCard'>price: {price} lv.</p>

            </div>


            {/* <button>Order</button> */}
        </div>
    )
}

export default Card;