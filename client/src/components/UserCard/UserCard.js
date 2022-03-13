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
                <div id='allBtns'>
                    <button id={roles == 'client' ? roles : 'clientBtn'}>client</button>
                    <button id={roles == 'editor' ? roles : 'editorBtn'}>editor</button>
                    <button id={roles == 'admin' ? roles : 'adminBtn'}>admin</button>
                </div>

                <div id='delUserBtn'><p id='txtDel'>X</p></div>
            </div>

        </div>
    )
}

export default UserCard;