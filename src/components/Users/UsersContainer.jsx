import { connect } from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, setUsersCountAC, setActivePageAC} from '../../Redux/UsersReducer';

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);