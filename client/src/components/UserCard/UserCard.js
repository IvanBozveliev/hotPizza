import './UserCard.css';
import * as userServices from '../../services/userSerivces';
import * as storageService from '../../services/storageService';
import {connect} from 'react-redux';
import { useState } from 'react';
import {deleteUser} from '../../actions/usersActions';

const UserCard = ({
    user, 
    id,
}) => {
    const [modal, setModal] = useState(false);
    let userRole = storageService.getLocalStorage()?.role;

    // const deleteHandler = (id) => {
    //     setModal(false)
    //     userServices.deleteOneUser(id)
    //     .then(result => {
            
    //         if (result.message) {

    //         } else {
    //             userServices.getAllUsers()
    //              .then(result => {
    //                 filteredUsers(result)
    //              })
               
    //         }
    //     })
    // }

    return (
        <>
            {modal ? (

                <div className='modal'>
                    <div className='modalContent'>
                        <p id='txtModal'>Do you want to delete this user?</p>
                        <button id="modalDel" onClick={() => deleteUser(id)}>Delete</button>
                        {/* <button id="modalDel" onClick={() => deleteHandler(id)}>Delete</button> */}
                        <button id='modalCancel' onClick={() => setModal(false)}>Cancel</button>
                    </div>

                </div>)
                : ''
            }
            <div className="usersDiv">
                <div className='usersInfo'>
                    <h4 id='userName'>{user.username}</h4>
                    <p id='currentRole'>{user.roles}</p>
                    <div id='allBtns'>
                        <button id={user.roles === 'client' ? user.roles : 'clientBtn'} onClick={() => console.log('work')}>client</button>
                        <button id={user.roles === 'editor' ? user.roles : 'editorBtn'} onClick={() => console.log('work')}>editor</button>
                        <button id={user.roles === 'admin' ? user.roles : 'adminBtn'} onClick={() => console.log('work')}>admin</button>
                    </div>
                    
                   {userRole === 'admin' && <div id='delUserBtn' onClick={() => setModal(true)}><p id='txtDel'>X</p></div>} 
                </div>

            </div>
        </>

    )
}

export default connect(null, {deleteUser})(UserCard);