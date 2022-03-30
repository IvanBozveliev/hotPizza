import './UserCard.css';
import { useState } from 'react';


const UserCard = ({
    user, 
    id,
    role,
    deleteUserById
}) => {
    const [modal, setModal] = useState(false);
    const roles = ['client', 'editor', 'admin'];
    
    let result = roles.filter(x => x !== role);
    
    const onClickBtn = (e) => {
        
        user.roles = e.target.innerText
        console.log(user)


    } 

    return (
        <>
            {modal ? (

                <div className='modal'>
                    <div className='modalContent'>
                        <p id='txtModal'>Do you want to delete this user?</p>
                        <button id="modalDel" onClick={() => deleteUserById(id)}>Delete</button>
                        <button id='modalCancel' onClick={() => setModal(false)}>Cancel</button>
                    </div>

                </div>)
                : ''
            }
            <div className="usersDiv">
                <div className='usersInfo'>
                    <h4 id='userName'>{user.username}</h4>
                    <p id='currentRole'>{role}</p>
                    <div id='allBtns'>
                        {result.map(x => <button key={x} onClick={onClickBtn} className='changeRoleBtn'>{x}</button>)}
                        {/* <button id={role === 'client' ? role : 'clientBtn'} onClick={() => console.log('work')}>client</button>
                        <button id={role === 'editor' ? role : 'editorBtn'} onClick={() => console.log('work')}>editor</button>
                        <button id={role === 'admin' ? role : 'adminBtn'} onClick={() => console.log('work')}>admin</button> */}
                    </div>
                    
                   {role === 'admin' && <div id='delUserBtn' onClick={() => setModal(true)}><p id='txtDel'>X</p></div>} 
                </div>

            </div>
        </>

    )
}


export default UserCard;