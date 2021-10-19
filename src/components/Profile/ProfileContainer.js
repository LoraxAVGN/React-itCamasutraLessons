import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../Redux/ProfileReducer'
import axios from 'axios';

class ProfileContainer extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);