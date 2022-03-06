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
            <button>Details</button>
            <button>Order</button>
        </div>
    )
}

export default Card;