import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../Redux/ProfileReducer'
import axios from 'axios';
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount(){
        this.props.setUserProfile(null);
        let idUser = this.props.match.params.idUser;
        if(!idUser){
            idUser = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + idUser).then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render(){
        return(
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (store) => ({
    profile: store.profilePage.profile,
})

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(ProfileContainerWithRouter);