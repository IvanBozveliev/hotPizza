import './Card.css';

const Card = ({
    img,
    title,
    currentStyle
}) => {
    return (
        <div className={currentStyle}>
            <img className='imageDiv' src={img} />
            <h5>{title}</h5>
            <div className='cardInfo'>
                <div className='imgCart'  />
                <p className='pCard'>price: 12$</p>
            </div>

            {/* <button>Details</button>
            <button>Order</button> */}
        </div>
    )
}

export default Card;