import { connect } from "react-redux";
import Users from "./Users";
import {followAC,unfollowAC} from '../../Redux/UsersReducer';

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
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);