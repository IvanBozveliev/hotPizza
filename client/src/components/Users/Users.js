import './Users.css';
import {useEffect, useState} from 'react';
import * as useServices from '../../services/userSerivces';
import UserCard from '../UserCard/UserCard';
import { connect } from 'react-redux';
import {fetchDeleteUser, fetchGetAllUsers} from "../../actions/usersActions";

const Users = (props) => {
 
    const deleteUserFunction = (id) =>{
       props.fetchDeleteUser(id)
    
    }

    return (
        <div className='userContent'>
            <h3>List of Users</h3>
           {props.users.map(user => <UserCard key={user._id} user={user} id={user._id} role={props.role} deleteUserById={deleteUserFunction}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
   return {
       users: state.users.data,
       role: state.auth.user.role
   }
}

const mapDispatchToProps = () => dispatch =>{
    return {
        getAllUsers: dispatch(fetchGetAllUsers()),
        fetchDeleteUser: (id) => dispatch(fetchDeleteUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);