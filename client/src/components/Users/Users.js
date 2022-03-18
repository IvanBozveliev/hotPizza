import './Users.css';
import {useEffect, useState} from 'react';
import * as useServices from '../../services/userSerivces';
import UserCard from '../UserCard/UserCard';

const Users = () => {
    
    const [users, setUsers] = useState([]);
    
    const filteredUsers = (newUsers) => {
        setUsers(newUsers)
    }

    useEffect( () => {
       useServices.getAllUsers()
         .then(users => {
            setUsers(users)
         })
    },[])
    
    return (
        <div className='userContent'>
            <h3>List of Users</h3>
           {users.map(user => <UserCard key={user._id} user={user} id={user._id} filteredUsers={filteredUsers} />)}
        </div>
    )
}

export default Users;