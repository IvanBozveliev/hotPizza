import './Users.css';
import {useEffect, useState} from 'react';
import * as useServices from '../../services/userSerivces';
import UserCard from '../UserCard/UserCard';
import { connect } from 'react-redux';
import {fetchGetAllUsers} from "../../actions/usersActions";

const Users = (props) => {

    return (
        <div className='userContent'>
            <h3>List of Users</h3>
           {props.users.map(user => <UserCard key={user._id} user={user} id={user._id}  />)}
        </div>
    )
}

const mapStateToProps = (state) => {
   return {
       users: state.users.data
   }
}

const mapDispatchToProps = () => dispatch =>{
    return {
        getAllUsers: dispatch(fetchGetAllUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);