import './UserCard.css';

const UserCard = ({
    username,
    id,
    roles
}) => {

    return (
        <div className="usersDiv">
            <div className='usersInfo'>
                <h4 id='userName'>{username}</h4>
                <p id='currentRole'>{roles}</p>
                <button>client</button>
                <button>editor</button>
                <button>admin</button>
                <p id='delUserBtn'><p id='txtDel'>X</p></p>
            </div>

        </div>
    )
}

export default UserCard;