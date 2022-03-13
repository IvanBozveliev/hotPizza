import './UserCard.css';
import * as userServices from '../../services/userSerivces';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({
    username,
    id,
    roles
}) => {
    const [modal, setModal] = useState(false);
    let navigate = useNavigate();

    const deleteHandler = (id) => {
        setModal(false)
        userServices.deleteOneUser(id)
        .then(result => {
            
            if (result.message) {

            } else {
                userServices.getAllUsers()
                 .then(result => {
                    let {username, roles, id} = result
                    navigate('/users')
                 })
               
            }
        })
    }

    return (
        <>
            {modal ? (

                <div className='modal'>
                    <div className='modalContent'>
                        <p id='txtModal'>Do you want to delete this user?</p>
                        <button id="modalDel" onClick={() => deleteHandler(id)}>Delete</button>
                        <button id='modalCancel' onClick={() => setModal(false)}>Cancel</button>
                    </div>

                </div>)
                : ''
            }
            <div className="usersDiv">
                <div className='usersInfo'>
                    <h4 id='userName'>{username}</h4>
                    <p id='currentRole'>{roles}</p>
                    <div id='allBtns'>
                        <button id={roles === 'client' ? roles : 'clientBtn'} onClick={() => console.log('work')}>client</button>
                        <button id={roles === 'editor' ? roles : 'editorBtn'} onClick={() => console.log('work')}>editor</button>
                        <button id={roles === 'admin' ? roles : 'adminBtn'} onClick={() => console.log('work')}>admin</button>
                    </div>

                    <div id='delUserBtn' onClick={() => setModal(true)}><p id='txtDel'>X</p></div>
                </div>

            </div>
        </>

    )
}

export default UserCard;