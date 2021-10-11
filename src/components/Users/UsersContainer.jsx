import { connect } from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC} from '../../Redux/UsersReducer';

function mapStateToProps(state){
    return{
        users: state.usersPage.users,
    }
}

function mapDispatchToProps(dispatch){
    return{
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);