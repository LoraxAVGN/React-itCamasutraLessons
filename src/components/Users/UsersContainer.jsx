import { connect } from "react-redux";
import React from 'react';
import Users from "./Users";
import axios from 'axios';
import {follow, setUsers, setUsersCount, setActivePage, setFetch} from '../../Redux/UsersReducer';

class usersContainerFunctions extends React.Component{

    axiosFunc = (activePage) =>{
        this.props.setFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${21}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
                this.props.setFetch(false);
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
                   isFetch={this.props.isFetch}
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
        isFetch: state.usersPage.isFetch,
    }
}

export default connect(mapStateToProps, 
    { follow, setUsers, setUsersCount, setActivePage, setFetch } 
        )(usersContainerFunctions);