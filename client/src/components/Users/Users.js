import './Users.css';
import {useEffect, useState} from 'react';
import * as useServices from '../../services/userSerivces';
import UserCard from '../UserCard/UserCard';

const Users = () => {
    
    const [users, setUsers] = useState([]);

    useEffect( () => {
       useServices.getAllUsers()
         .then(users => {
            setUsers(users)
         })
    },[])
    
    return (
        <div className='userContent'>
           {users.map(user => <UserCard key={user._id} id={user._id} roles={user.roles} username={user.username}/>)}
        </div>
    )
}

export default Users;