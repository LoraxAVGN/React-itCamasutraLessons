import React from 'react';
import Preloader from '../Preloader/Preloader';
import MyProfile from './MyProfile/MyProfile';
import Post from './Posts/Post';
import s from './Profile.module.css';
import itemPhoto from '../../assets/images/avatar.png'

const Profile = (props) => {
    let allPostMessages = props.mes
        .map((m,i) => <Post key={i} message={m.message} count={m.count}/>);
    
    if(!props.profile) return(<Preloader />);

    return (
        <div>
           <div className={s.contant}>
                <div className={s.photo_info}>
                    <img className={s.cat} 
                        src={!props.profile.photos.small?itemPhoto:props.profile.photos.small}
                    />
                    <div className={s.myInfo}>
                        <p>Имя: {props.profile.fullName}</p>
                        {props.profile.aboutMe && <p>Обо мне: {props.profile.aboutMe}</p>}
                        {props.profile.lookingForAJob && <p>Работа: {props.profile.lookingForAJob?'Есть':'Нет'}</p>}
                        {props.profile.lookingForAJobDescription && <p>О работе: {props.profile.lookingForAJobDescription}</p>}
                    </div>
                </div>
                     
                <MyProfile dispatch={props.dispatch}
                           profileTextareaValue={props.profileTextareaValue}
                />
                <div className={s.myPosts}>
                    { allPostMessages }
                </div>
            </div>
        </div>
    )
}

export default Profile;