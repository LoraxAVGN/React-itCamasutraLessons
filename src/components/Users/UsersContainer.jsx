import { connect } from "react-redux";
import React from 'react';
import Users from "./Users";
import axios from 'axios';
import {followAC, setUsersAC, setUsersCountAC, setActivePageAC} from '../../Redux/UsersReducer';

class usersContainerFunctions extends React.Component{

    axiosFunc = (activePage) =>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${21}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    componentDidMount(){
        this.axiosFunc(this.props.activePage);
    }

    render(){
        return(
            <Users setActivePage={this.props.setActivePage} 
                   axiosFunc={this.axiosFunc} 
                   activePage={this.props.activePage}
                   users={this.props.users}
                   follow={this.props.follow}
            />
        )
    }
}

function mapStateToProps(state){
    return{
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        pagesCount: state.usersPage.pagesCount,
        activePage: state.usersPage.activePage,
    }
}

function mapDispatchToProps(dispatch){
    return{
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setUsersCount: (usersCount) => {
            dispatch(setUsersCountAC(usersCount));
        },
        setActivePage: (activePage) => {
            dispatch(setActivePageAC(activePage));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(usersContainerFunctions);